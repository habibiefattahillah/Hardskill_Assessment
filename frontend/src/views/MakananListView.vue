<template>
  <div class="makanan-list">
    <h1>Makanan List</h1>
    <div class="makanan-list-container">
      <!-- <button @click="toggleAddModal" class="btn btn-success badge mb-3">
        Tambah Makanan
      </button> -->

      <router-link to="AddMakanan">Add Makanan</router-link>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Makanan</th>
            <th>Asal Daerah</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, $index) in listData" :key="$index">
            <th scope="row">{{ $index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.origin }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <MakananDetail
      v-if="showDetailModal"
      @close="showDetailModal = false"
      :temp="temp"
    /> -->
  </div>
</template>

<script>
import axios from "axios";
import AddMakanan from "@/views/AddMakanan.vue";
// import MakananDetail from "@/views/MakananDetail.vue";

export default {
  name: "MakananList",
  // components: {
  //   AddMakanan,
  //   MakananDetail,
  // },
  data() {
    return {
      listData: {},
      // dataById: {},
      temp: "",
      showAddModal: false,
      // showDetailModal: false,
    };
  },
  mounted() {
    axios
      .get("/makanan/getAll")
      .then((res) => {
        this.listData = res.data;
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    toggleAddModal() {
      this.showAddModal = !this.showAddModal;
    },
    createData(form) {
      axios
        .post("/makanan/post", form)
        .then((res) => {
          console.log(res);
          this.getAll();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
