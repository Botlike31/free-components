<template>
  <div class="content">
    <section>
      <div class="faq-header">
        <h2>FAQ - HÄUFIG GESTELLTE FRAGEN</h2>
        <p>
          Bevor du uns ein Support-Ticket schreibst, möchten wir dich bitten
          unser FAQ-System zu nutzen um möglicherweise dort eine Antwort auf
          deine Frage zu finden.
        </p>
      </div>
    </section>
    <Accordion :faqsData="faqsData" />
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";

export default {
  components: {
    Accordion,
  },
  data() {
    return {
      faqsData: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/comments/?_limit=5")
      .then((res) => (res.ok && res.json()) || Promise.reject(res))
      .then((data) => {
        this.faqsData = data;
        /* console.log(this.faqsData); */
      });
  },
};
</script>
<style>
.faq-header {
  padding: 1rem 1rem 2rem 1rem;
  background: rgba(48, 48, 48, 0.4);
}

.faq-header h2 {
  color: #ffd744;
  font-size: 1.5rem;
  line-height: 1.5rem;
}
.faq-header p {
  font-family: Segoe UI, Verdana, Sans-Serif, Arial;
  font-size: 0.9rem;
  font-weight: 400;
}

.faq {
  display: block;
  width: 100%;
  margin: auto;
  padding: 1rem;
  background: rgba(48, 48, 48, 0.4);
}
.faq h2 {
  font-size: 1rem;
  color: #ffd744;
  margin-bottom: 1.5rem;
}
.faq p {
  color: rgba(187, 187, 187, 1);
  word-wrap: break-word;
}
.faq .question {
  position: relative;
  transition: all 0.4s linear;
}

.faq .question {
  top: 50%;
  right: 0px;
  height: 1rem;
  background-image: url("../assets/arrow-down.png");
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.4s linear;
}

.faq .answer-open {
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
