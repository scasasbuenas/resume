<script lang="ts">
  import type { Language } from "../../api/schemas/language";
  export let languages: Language[];
</script>

<section class="margin-bottom">
  <h2>LANGUAGES</h2>
  <div class="languages-container">
    {#each languages as language}
      <div class="language-item">
        <span class="language-info">
          <strong>{language.name}</strong>
          {#if language.certifications && language.certifications.length > 0}
            {#each language.certifications as cert}
              - {cert.name}: {cert.grade} ({cert.cefrLevel}) - {cert.date.toLocaleDateString()} - ID: {cert.id}
            {/each}
          {/if}
        </span>
        <span class="proficiency">{language.proficiency}</span>
      </div>
    {/each}
  </div>
</section>

<style>
  @import "../styles/Languages.css";
</style>