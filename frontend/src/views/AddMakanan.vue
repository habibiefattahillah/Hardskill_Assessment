<template>
  <div
    class="backdrop container-fluid d-flex align-items-center"
    @click.self="this.$emit('close')"
  >
    <div class="addBookModal container">
      <form @submit.prevent="createData(form)">
        <h1>Input Data Makanan</h1>
        <div class="form-group">
          <label for="input-title">*Nama Makanan</label>
          <input
            type="text"
            required="true"
            autocomplete="off"
            class="form-control"
            id="input-title"
            name="title"
            v-model="form.name"
          />
        </div>
        <div class="form-group">
          <label for="input-author">*Asal</label>
          <input
            type="text"
            required="true"
            autocomplete="off"
            class="form-control"
            id="input-author"
            name="author"
            v-model="form.origin"
          />
        </div>
        <div class="form-group">
          <label for="input-description">Desc</label>
          <textarea
            type="text"
            class="form-control"
            autocomplete="off"
            id="input-release-date"
            name="description"
            v-model="form.description"
            rows="3"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <router-link to="Makanan">Kembali</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  emits: ["action", "close"],
  data() {
    return {
      form: {
        name: "",
        origin: "",
        description: "",
      },
      //   dataById: {
      //     name: "",
      //     origin: "",
      //     description: "",
      //   },
    };
  },
  methods: {
    createData(form) {
      axios
        .post("/makanan/post", form)
        .then((res) => {
          console.log(res);
          this.$emit("action");
        })
        .catch((err) => console.log(err));
    },
  },
};
//   mounted() {
//     if (this.isUpdate) {
//       axios
//         .get("/makanan/getById/" + this.temp)
//         .then((res) => {
//           this.dataById = res.data;
//           console.log(res);
//         })
//         .catch((err) => console.log(err));
//     }
//   },
</script>

<style>
.addBookModal {
  background: white;
  z-index: 999;
  width: 35rem;
  height: auto;
  border-radius: 3%;
  padding: 2rem;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.addBookModal h1 {
  color: black;
  text-align: center;
  border: none;
  padding: 0;
}
</style>
