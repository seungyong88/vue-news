import ListView from "./ListView";
import bus from "../utils/bus";

export default function createdListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션이 들어갈 자리
    name,
    created () {
      bus.$emit('start:spinner');

      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name);
        bus.$emit('end:spinner');
      }, 1000)
    },
    render(createdElement){
      return createdElement(ListView);
    }
  }
}