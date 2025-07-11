<script lang="ts">
  import type { Teaching } from "../../api/schemas/teachingExp";
  import { getWorkExperienceDateRange } from "../utils/year";
  import Location from "./generic/Location.svelte";
  import ResponsibilitiesAchievements from "./generic/ResponsibilitiesAchievements.svelte";

  export let teachingExperience: Teaching[];
</script>

<section>
  <h2>Teaching Experience</h2>
  {#each teachingExperience.filter((teach) => !teach.isHidden) as teach}
    <div class="margin-bottom">
      <div class="row">
        <p class="institution">{teach.organization}</p>
        <Location location={{
          city: teach.city,
          state: teach.state,
          country: teach.country
        }} />
      </div>
      <div class="row">
        <p class="position">{teach.title}{teach.course ? ` - ${teach.course.name}` : ''}</p>
        <p>
          {getWorkExperienceDateRange(teach.startDate, teach.endDate, teach.isCurrent)}
        </p>
      </div>
      {#if teach.supervisor}
        <div class="row">
          <p class="supervisor">Supervisor: {teach.supervisor}</p>
        </div>
      {/if}
      
      {#if teach.description?.length}
        <ul>
          {#each teach.description as description}
              <li>{description}</li>
          {/each}
        </ul>
      {/if}
    
    </div>
  {/each}
</section>

<style>
  @import "../styles/Teaching.css";
</style>