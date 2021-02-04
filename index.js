const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => ({
  name: `Tarea ${el}`,
  prioridad: Math.ceil(el + Math.random() * 10),
}));

new Vue({
  el: "#app",
  data: {
    baseUrl: "https://placekitten.com/g",
    height: 50,
    width: 50,
    inputText: "",
    items: array,
  },
  computed: {
    getImageUrl() {
      return `${this.baseUrl}/${this.width * 5}/${this.height * 5}`;
    },
    getPrioritariesTasks() {
      return this.items.sort((a, b) => a.prioridad - b.prioridad);
    },
  },
});
