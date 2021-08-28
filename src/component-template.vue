<template>
  <div>Here is: {{ fullMessage }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  name: "CompomentTemplate",
})
export default class CompomentTemplate extends Vue {
  @Prop({ required: false, default: "Hello world!" }) private message!: string;

  get fullMessage(): string {
    return `${this.message} Template!!!`;
  }

  mounted(): void {
    //any code here
  }

  @Watch("message")
  messageChanged(val: string): void {
    console.log("messageChanged:", val);
  }
}
</script>

<style lang="scss">
</style>
