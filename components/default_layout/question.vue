<template>
  <div class="question-wrap"  >
    <div class="question" v-bind:class="(isActive) ? 'active' : ''"> </div>
  </div>
</template>

<script>
export default {
name: "question",
  props: {
    isActive: Boolean,
  }
}
</script>

<style scoped>
  .question-wrap{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 170px;
    height: 170px;
  }

  .question{
    cursor: pointer;
    width: 45px;
    height: 45px;
    background-color: #fff;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.25);
    background-image: url("assets/icons/question.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 12px;
    border-radius: 50%;
    transition:.15s;
  }

  .question{
    position: absolute;
    right: 32px;
    bottom: 32px;
  }

  .question-wrap:hover .question,
   .question.active
  {
    background-image: url("assets/icons/question_white.svg");
    background-color: #faa419;
    transform: scale(1.5);
    right: 55px;
    bottom: 65px;
  }
</style>
