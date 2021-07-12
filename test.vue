<template>
  <div id="app">
    <input type="text" @input="inputText" :value="searchWord">
    <ul id="result">
      <li v-for="(text, index) in calcList" :key="index" v-html="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        '서버 개발자', '프론트엔드 개발자', 'iOS 개발자', '안드로이드 개발자', 'QA 테스트 엔지니어',
        '머신러닝 엔지니어','데이터 엔지니어', '보안 엔지니어','CTO', '임베디드 개발자','시스템・네트워크 관리자',
        '시스템 설계','DevOps', 'DBA','영상・음성 엔지니어','그래픽스 엔지니어', 'CIO'
      ],
      searchWord: ''
    }
  },
  computed: {
    calcList() {
      if(this.searchWord === '') return []
      return this.list
        .filter(el => el.includes(this.searchWord))
        .map(text => {
          const regExAll = new RegExp(this.searchWord, 'g')
          return '<p>' + text.replace(regExAll, (word) => `<strong>${word}</strong>`) + '</p>'
        })
    }
  },
  methods: {
    inputText(e) {
      this.searchWord = e.target.value7
    }
  },

}
</script>

<style>
strong {
  font-size: 15px;
  font-weight: bold;
}
</style>