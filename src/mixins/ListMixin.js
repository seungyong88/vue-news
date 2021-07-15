import bus from "../utils/bus";

export default {
  // 재사용할 컴포넌트 옵션
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then((res) => {
          bus.$emit('end:spinner');
        })
        .catch(err => console.log(err));

    }, 200)
  }

}

// import ListView from "./ListView";
// import bus from "../utils/bus";

// export default function createListView(name) {
//   return {
//     name,
//     created () {
//       bus.$emit('start:spinner');

//       setTimeout(() => {
//         this.$store.dispatch('FETCH_LIST', this.$route.name)
//           .then((res) => {
//             console.log('2 :', res);
//             bus.$emit('end:spinner');
//           })
//           .catch(err => console.log(err));

//       }, 200)
//     },
//     render(createElement) {
//       return createElement(ListView);
//     }
//   }
// }