<template>
  <div class="content">
    <Accordion :faqsData="faqsData"/>
  </div>
</template>

<script>
  import Accordion from '@/components/Accordion.vue'

  export default {
    components:{
      Accordion
    },
    data() {
      return {
        faqsData: []
      }
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/comments/?_limit=5').then(res => res.ok && res.json() || Promise.reject(res))
      .then(data => {
            this.faqsData = data;
            /* console.log(this.faqsData); */
      })
    }
  }

  </script>

<style>
.faq {
  display: block;
  width: 100%;
  margin: auto;
  padding: 1rem;
  background: rgba(48,48,48,.4);
}

.faq h2 {
  font-size: 1rem;
  color: #ffd744;
}

.faq .question {
  position: relative;
  transition: all 0.4s linear;
}

.faq .question::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0px;
  width: 1rem;
  height: 1rem;
  background-image: url('../assets/arrow-down.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.4s linear;
}

.faq .answer-open{
  opacity: 1;
  max-height: 4rem;
  overflow-y: hidden;
  transition: all 0.4s ease-in;
}

.faq .answer-closed {
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}

</style>