<template>
  <div class="card">
    <div class="bankLogo">
      <el-image
        :src="bankUrl"
        :fit="fit"
        >
      </el-image>
    </div>
    <div class="groupLogo">
      <el-image
        :src="url"
        :fit="fit"
        @click="toVisa()"
        @dblclick="toUnion()"
        >
      </el-image>
    </div>
    <div class="cardNumber">
      {{ number }}
    </div>
    <div class="cardHolder">
      <div class="textLabel">Card Holder</div>
      <div>{{ holder }}</div>
    </div>
    <div class="expries">
      <div class="textLabel">Expries</div>
      <div>{{ expries }}</div>
    </div>
  </div>
</template>

<script>
import bank from '@/assets/bank.png';
import master from '@/assets/master.png';
import visa from '@/assets/visa.png';
import union from '@/assets/union.png';

export default {
  name: 'Card',
  data() {
    return {
      fit: 'contain',
      url: master,
      bankUrl: bank,
      holder: 'Snoword',
      expries: 'YY/MM',
    };
  },
  computed: {
    number() {
      return this.$store.state.number;
    },
  },
  methods: {
    toVisa: () => { this.url = visa; },
    toUnion: () => { this.url = union; },
  },
};
</script>
