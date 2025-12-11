<script lang="ts">
	import { cn } from '$lib/utils';

	interface TimelineProps {
		epsilon?: number;
		totalRounds?: number;
		class?: string;
	}

	let { epsilon = $bindable(0.1), totalRounds = 1000, class: className = '' }: TimelineProps = $props();

	// Reactive state
	let tooltipText = $state('');
	let tooltipVisible = $state(false);
	let tooltipX = $state(0);
	let tooltipY = $state(0);

	// Timeline dimensions
	const armHeight = 25;
	const armSpacing = 5;
	const timelineWidth = 800;
	const marginLeft = 60;

	// Calculate derived parameters
	const params = $derived.by(() => {
		const rho = Math.min(1 - epsilon / 2, 0.95);
		const delta = (1 - rho) / (1 - 0.1);
		const n = Math.ceil(Math.log(epsilon / 2) / Math.log(1 - delta));
		return { rho, delta, n };
	});

	// Calculate session lengths for a specific arm
	function calculateSessionLengths(armIndex: number, rho: number, delta: number) {
		const i = armIndex + 1;
		const nullSession = (1 - Math.pow(1 - delta, i - 1)) * totalRounds;
		const honeymoonSession = Math.pow(1 - delta, i - 1) * (1 - rho) * totalRounds;
		const trapSession = Math.pow(1 - delta, i - 1) * rho * totalRounds;

		return {
			null: Math.round(nullSession),
			honeymoon: Math.round(honeymoonSession),
			trap: Math.round(trapSession)
		};
	}

	// SVG height based on number of arms
	const svgHeight = $derived.by(() => params.n * (armHeight + armSpacing) + 40);

	// Tooltip handlers
	function showTooltip(event: MouseEvent, text: string) {
		tooltipText = text;
		tooltipVisible = true;
		tooltipX = event.pageX + 10;
		tooltipY = event.pageY - 30;
	}

	function hideTooltip() {
		tooltipVisible = false;
	}

	function moveTooltip(event: MouseEvent) {
		tooltipX = event.pageX + 10;
		tooltipY = event.pageY - 30;
	}
</script>

<div class={cn('w-full space-y-6 mt-4', className)}>
	<!-- Controls -->
	<div class="space-y-4 rounded-lg border bg-card p-4">
		<div class="flex items-center gap-4">
			<label for="epsilon" class=" text-sm font-medium"> ε: </label>
			<input
				id="epsilon"
				type="range"
				min="0.1"
				max="0.5"
				step="0.05"
				bind:value={epsilon}
				class="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-muted"
			/>
			<span class="min-w-12 font-mono text-sm">{epsilon.toFixed(2)}</span>
		</div>

		<div class="rounded-md bg-muted/50 p-4 font-mono text-sm">
			<span class="font-semibold">Calculated Parameters:</span><br />
			n (arms): <span class="text-primary">{params.n}</span> | δ:
			<span class="text-primary">{params.delta.toFixed(4)}</span>
			| ρ: <span class="text-primary">{params.rho.toFixed(3)}</span> | T:
			<span class="text-primary">{totalRounds}</span>
		</div>
	</div>

	<!-- Timeline -->
	<div class="overflow-hidden rounded-lg border bg-card">
		<div class="h-[600px] overflow-y-auto p-4">
			<svg
				width="100%"
				height={svgHeight}
				viewBox={`0 0 ${timelineWidth + marginLeft} ${svgHeight}`}
				class="font-mono text-xs"
			>


				<!-- Timeline arms -->
				{#each Array(params.n) as _, i (i)}
					{@const sessions = calculateSessionLengths(i, params.rho, params.delta)}
					{@const y = 20 + i * (armHeight + armSpacing)}
					{@const currentX = marginLeft}

					<!-- Arm label -->
					<text
						x={marginLeft - 10}
						y={y + armHeight / 2}
						text-anchor="end"
						fill="var(--color-foreground)"
						class="text-[10px]"
					>
						Arm {i + 1}
					</text>

					<!-- Session rectangles -->
					<g class="arm-{i}">
						<!-- Null session -->
						{#if sessions.null > 0}
							{@const nullWidth = Math.max((sessions.null / totalRounds) * timelineWidth, 1)}
							<rect
								x={currentX}
								{y}
								width={nullWidth}
								height={armHeight}
								rx="2"
								fill="var(--color-destructive)"
								stroke="var(--color-border)"
								stroke-width="1"
								opacity="0.8"
								class="cursor-pointer transition-opacity hover:stroke-2 hover:opacity-100"
								role="button"
								tabindex="0"
								onmouseenter={(e) =>
									showTooltip(e, `Arm ${i + 1} - Null Session: ${sessions.null} rounds`)}
								onmousemove={moveTooltip}
								onmouseleave={hideTooltip}
							/>
						{/if}

						<!-- Honeymoon session -->
						{#if sessions.honeymoon > 0}
							{@const honeymoonX = currentX + (sessions.null / totalRounds) * timelineWidth}
							{@const honeymoonWidth = Math.max(
								(sessions.honeymoon / totalRounds) * timelineWidth,
								1
							)}
							<rect
								x={honeymoonX}
								{y}
								width={honeymoonWidth}
								height={armHeight}
								rx="2"
								fill="var(--color-chart-2)"
								stroke="var(--color-border)"
								stroke-width="1"
								opacity="0.8"
								class="cursor-pointer transition-opacity hover:stroke-2 hover:opacity-100"
								role="button"
								tabindex="0"
								onmouseenter={(e) =>
									showTooltip(
										e,
										`Arm ${i + 1} - Honeymoon: ${sessions.honeymoon} rounds (π* prices)`
									)}
								onmousemove={moveTooltip}
								onmouseleave={hideTooltip}
							/>
						{/if}

						<!-- Trap session -->
						{#if sessions.trap > 0}
							{@const trapX =
								currentX +
								(sessions.null / totalRounds) * timelineWidth +
								(sessions.honeymoon / totalRounds) * timelineWidth}
							{@const trapWidth = Math.max((sessions.trap / totalRounds) * timelineWidth, 1)}
							<rect
								x={trapX}
								{y}
								width={trapWidth}
								height={armHeight}
								rx="2"
								fill="var(--color-chart-1)"
								stroke="var(--color-border)"
								stroke-width="1"
								opacity="0.8"
								class="cursor-pointer transition-opacity hover:stroke-2 hover:opacity-100"
								role="button"
								tabindex="0"
								onmouseenter={(e) =>
									showTooltip(e, `Arm ${i + 1} - Trap: ${sessions.trap} rounds (1/0 prices)`)}
								onmousemove={moveTooltip}
								onmouseleave={hideTooltip}
							/>
						{/if}
					</g>
				{/each}
			</svg>
		</div>
	</div>

	<!-- Legend -->
	<div class="rounded-lg border bg-card p-4">
		<div class="flex flex-wrap justify-center gap-6">
			<div class="flex items-center gap-2">
				<div
					class="h-3 w-5 rounded-sm border border-border"
					style="background-color: var(--color-destructive)"
				></div>
				<span class="text-sm">∅ Session (No trade)</span>
			</div>
			<div class="flex items-center gap-2">
				<div
					class="h-3 w-5 rounded-sm border border-border"
					style="background-color: var(--color-chart-2)"
				></div>
				<span class="text-sm">Honeymoon (π* prices)</span>
			</div>
			<div class="flex items-center gap-2">
				<div
					class="h-3 w-5 rounded-sm border border-border"
					style="background-color: var(--color-chart-1)"
				></div>
				<span class="text-sm">Trap (1/0 prices)</span>
			</div>
		</div>
	</div>

	<!-- Tooltip -->
	{#if tooltipVisible}
		<div
			class="pointer-events-none fixed z-50 rounded-md bg-black/80 px-3 py-2 text-xs text-white"
			style="left: {tooltipX}px; top: {tooltipY}px;"
		>
			{tooltipText}
		</div>
	{/if}
</div>
