<script>
export default {
  name: "SlideBanner",
  mounted() {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
      column.style.setProperty('--animation', 'slide');
      column.style.setProperty('height', '200%');
      column.innerHTML = column.innerHTML + column.innerHTML;
    });
  },
};
</script>


<template>
<header>
	<div class="column">
		<a href="#"><img src="https://picsum.photos/300/300?image=890" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=891" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=892" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=893" alt="image"></a>
	</div>
	<div class="column">
		<a href="#"><img src="https://picsum.photos/300/300?image=894" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=885" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=896" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=887" alt="image"></a>
	</div>
	<div class="column">
		<a href="#"><img src="https://picsum.photos/300/300?image=898" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=889" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=910" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=911" alt="image"></a>
	</div>
	<div class="column">
		<a href="#"><img src="https://picsum.photos/300/300?image=871" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=872" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=873" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=874" alt="image"></a>
	</div>
	<div class="column">
		<a href="#"><img src="https://picsum.photos/300/300?image=861" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=862" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=863" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=864" alt="image"></a>
	</div>
	<div class="column">
		<a href="#"><img src="https://picsum.photos/300/300?image=851" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=852" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=853" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=855" alt="image"></a>
	</div>
	<div class="column">
		<a href="#"><img src="https://picsum.photos/300/300?image=841" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=842" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=845" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=844" alt="image"></a>
	</div>
	<div class="column">
		<a href="#"><img src="https://picsum.photos/300/300?image=831" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=832" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=833" alt="image"></a>
		<a href="#"><img src="https://picsum.photos/300/300?image=834" alt="image"></a>
	</div>
</header>



</template>


<style lang="scss" scoped>
body {
	min-height: 100vh;
	display: grid;
	place-items: center;
}

header {
	display: flex;
	overflow: hidden;
	height: 50vw;
	background: #111;
}

header:hover img {
	opacity: 0.5;
}

header img {
	max-width: 100%;
	vertical-align: middle;
	border: 1px solid black;
	box-sizing: border-box;
	transition: opacity .2s;
}

header img:hover {
	opacity: 1;
}

header .column {
	animation: var(--animation, none) 16s infinite linear;
}

header .column:hover {
	animation-play-state: paused;
}

header .column:nth-of-type(odd) {
	align-self: flex-end;
	--direction: 50%;
}

@keyframes slide {
	to { transform: translateY(var(--direction, -50%)) }
}


</style>