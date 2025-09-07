<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const post = $derived(data.post);
</script>

<div class='prose container mx-auto px-4'>
	{@html post.content}
</div>