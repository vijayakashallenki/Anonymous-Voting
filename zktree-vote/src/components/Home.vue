<template>
  <main role="main" class="container">
    <div style="padding-top: 7rem" class="d-none d-lg-block"></div>
    <div class="row justify-content-md-center">
      <div class="col-lg-4">
        <div class="text-center vstack gap-3">
          <h1>Simple voting system</h1>
          <a href="#/validator" class="btn btn-primary">Validator tool</a>
          <a href="#/registration" class="btn btn-primary"
            >Registration to vote</a
          >
          <a href="#/vote" class="btn btn-primary">Vote</a>
          <a href="#/results" class="btn btn-primary">Results</a>
          <a
            href="https://thebojda.medium.com/how-i-built-an-anonymous-voting-system-on-the-ethereum-blockchain-using-zero-knowledge-proof-d5ab286228fd"
            >Check my article</a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class Home extends Vue {}
</script>