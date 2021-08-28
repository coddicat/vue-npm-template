import { Vue } from "vue-property-decorator";
export default class CompomentTemplate extends Vue {
    private message;
    get fullMessage(): string;
    mounted(): void;
    messageChanged(val: string): void;
}
