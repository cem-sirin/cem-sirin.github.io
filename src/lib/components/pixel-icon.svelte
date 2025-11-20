<script lang="ts">
	export let name: string;
	export let size: string = '24px';
	export let className: string = '';
</script>

<i class="hn hn-{name} {className}" style="font-size: {size}"></i>
