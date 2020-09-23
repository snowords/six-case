<template>
  <el-row>
    <el-col :span="8" :offset="8">
      <Card class="card" />
      <Form />
    </el-col>
  </el-row>
</template>

<script>
import Card from '@/components/Card.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'CardForm',
  components: { Card, Form },
};
</script>

<style lang="scss" scoped>
  .card{
    position: absolute;
    z-index: 1;
    margin: 0 90px;
  }
</style>
