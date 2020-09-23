<template>
  <el-form :model="form" class="formBox">
    <div class="inputLabel">Card Number</div>
    <el-form-item>
      <input :value="number" @input="updateNumber">
    </el-form-item>
    <div class="inputLabel">Card Holder</div>
    <el-form-item>
      <el-input v-model="form.holder"></el-input>
    </el-form-item>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="inputLabel">Effective Date</div>
        <el-row>
          <el-col :span="12">
            <el-select v-model="form.month" placeholder="Month">
              <el-option label="5月" value="5"></el-option>
              <el-option label="6月" value="6"></el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <el-select v-model="form.year" placeholder="Year">
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <div class="inputLabel">CW</div>
        <el-input v-model="form.cw"></el-input>
      </el-col>
    </el-row>
    <el-form-item class="btnRow">
      <el-button class="submitBtn" type="primary" @click="onSubmit">Submit</el-button>
    </el-form-item>
  </el-form>
  <!-- <input :value="number" @input="updateNumber"> -->
  <!-- <el-input @change="updateNumber"></el-input> -->
</template>
<script>

export default {
  name: 'Form',
  data() {
    return {
      form: {},
      number: '',
    };
  },
  methods: {
    updateNumber(e) {
      console.log(e.target.value);
      this.$store.commit('updateNumber', e.target.value);
    },
    onSubmit: () => {
      const value = Object.values(this.form);
      console.log(value);
      this.$message(this.form.number);
      // this.$message(this.form.holder);
    },
  },
};
</script>
