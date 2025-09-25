<script lang="ts">
  import type { ProfessionalSummary } from "../../api/schemas/professionalSummary";
  export let professionalSummary: ProfessionalSummary;
</script>

{#if !professionalSummary.isHidden}
<section class="margin-bottom">
  <h2>PROFESSIONAL SUMMARY</h2>
  <p class="summary-content">{professionalSummary.content}</p>
</section>
{/if}

<style>
  @import "../styles/ProfessionalSummary.css";
</style>