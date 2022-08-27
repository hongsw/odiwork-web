import Vue from "vue";

//api파일들에 대해 interface를 정의하는 부분입니다.
interface test {
  promiseTest: Function;
}
interface apis {
  test: test;
}

//이곳이 가장 중요한 곳입니다.
declare module "vue/types/vue" {
  interface Vue {
    $api: apis;
  }
}