<script lang="ts">
  import type { WorkExperience } from "../../../api/schemas/workExperience";
  import type { Teaching } from "../../../api/schemas/teaching";
  export let experience: WorkExperience | Teaching;
</script>

<div class="indented-details">
  {#if experience.description}
    <p>{experience.description}</p>
  {/if}
  
  {#if experience.responsibilities?.length}
    <p class="section-title">Responsibilities:</p>
    <ul>
      {#each experience.responsibilities as responsibility}
        <li>{responsibility}</li>
      {/each}
    </ul>
  {/if}

  {#if experience.achievements?.length}
    <p class="section-title">Achievements:</p>
    <ul>
      {#each experience.achievements as achievement}
        <li>{achievement}</li>
      {/each}
    </ul>
  {/if}

  {#if experience.technologies?.length}
    <p class="section-title">Technologies:</p>
    <p class="small-technologies">{experience.technologies.join(' • ')}</p>
  {/if}
</div>

<style>
  @import "../../styles/ResponsibilitiesAchievements.css";
</style>