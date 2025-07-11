<script lang="ts">

  import { EDUCATION } from './data/education';
  import Education from './components/Education.svelte';

  import { PERSONAL_INFO } from './data/personalInfo';
  import PersonalInfo from './components/PersonalInfo.svelte';

  import { WORK_EXPERIENCE } from './data/workExp';
  import WorkExperience from './components/WorkExperience.svelte';

  import { TEACHING } from './data/teachingExp';
  import TeachingExperience from './components/TeachingExperience.svelte';

  import PrintButton from './components/PrintButton.svelte';

</script>

<main class="cv-container">

  <PersonalInfo personalInfo={PERSONAL_INFO} />
  <Education education={EDUCATION} />
  <WorkExperience workExperience={WORK_EXPERIENCE} />
  <TeachingExperience teachingExperience={TEACHING} />

</main>

<PrintButton />