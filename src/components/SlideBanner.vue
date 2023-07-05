<script>
export default {
  name: "SlideBanner",

	data() {
    return {
      slideData: [
        {
          id: 1,
          images: [
            { id: 1, src: "https://picsum.photos/300/300?image=898", alt: "image" },
            { id: 2, src: "https://picsum.photos/300/300?image=889", alt: "image" },
            { id: 3, src: "https://picsum.photos/300/300?image=910", alt: "image" },
						{ id: 4, src: "https://picsum.photos/300/300?image=911", alt: "image" },
						{ id: 5, src: "https://picsum.photos/300/300?image=912", alt: "image" },
						{ id: 6, src: "https://picsum.photos/300/300?image=913", alt: "image" },
          ],
        },
        {
          id: 2,
          images: [
            { id: 1, src: "https://picsum.photos/300/300?image=898", alt: "image" },
            { id: 2, src: "https://picsum.photos/300/300?image=889", alt: "image" },
            { id: 3, src: "https://picsum.photos/300/300?image=910", alt: "image" },
						{ id: 4, src: "https://picsum.photos/300/300?image=911", alt: "image" },
						{ id: 5, src: "https://picsum.photos/300/300?image=912", alt: "image" },
						{ id: 6, src: "https://picsum.photos/300/300?image=913", alt: "image" },
          ],
        },
				{
          id: 3,
          images: [
            { id: 1, src: "https://picsum.photos/300/300?image=898", alt: "image" },
            { id: 2, src: "https://picsum.photos/300/300?image=889", alt: "image" },
            { id: 3, src: "https://picsum.photos/300/300?image=910", alt: "image" },
						{ id: 4, src: "https://picsum.photos/300/300?image=911", alt: "image" },
						{ id: 5, src: "https://picsum.photos/300/300?image=912", alt: "image" },
						{ id: 6, src: "https://picsum.photos/300/300?image=913", alt: "image" },
          ],
        },
       
      ],
    };
  },


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
  <div class="slide">
    <div v-for="row in slideData" :key="row.id" class="row mb-1">
      <a v-for="image in row.images" :key="image.id" href="#" class="col p-1">
        <img :src="image.src" :alt="image.alt" class="slide-image" />
      </a>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.slide{
	overflow-x: hidden;
	background: white;
}

.slide img{
	opacity: 0.9;
	filter: saturate(1);
	transition: all 1s;
	border-radius: 1rem;
	aspect-ratio: 1.5/1;
	object-fit: cover;
}

.slide img:hover {
	filter: saturate(2);
	opacity: 1;
}

.slide img {
	max-width: 100%;
	border: 1px solid black;
	box-sizing: border-box;
	transition: opacity .2s;
}




</style>