<template>
  <div class="faqs">
    <div
      v-for="(faq, index) in faqsData"
      :key="index"
      class="faq"
      @click="toggleAccordion(index)"
    >
      <h2 class="question">{{ faq.name }}?</h2>
      <p :class="isOpen.includes(index) ? 'answer-open' : 'answer-closed'">
        {{ faq.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: [],
    };
  },
  props: {
    faqsData: Array,
  },
  methods: {
    toggleAccordion(index) {
      if (this.isOpen.includes(index)) {
        this.isOpen = this.isOpen.filter((i) => i !== index);
        return;
      }
      this.isOpen.push(index);
    },
  },
};
</script>
