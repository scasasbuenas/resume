<script lang="ts">

  import { EDUCATION } from './data/education';
  import Education from './components/Education.svelte';

  import { PERSONAL_INFO } from './data/personalInfo';
  import PersonalInfo from './components/PersonalInfo.svelte';

  import { PROFESSIONAL_SUMMARY } from './data/professionalSummary';
  import ProfessionalSummary from './components/ProfessionalSummary.svelte';

  import { WORK_EXPERIENCE } from './data/workExp';
  import WorkExperience from './components/WorkExperience.svelte';

  import { TEACHING } from './data/teachingExp';
  import TeachingExperience from './components/TeachingExperience.svelte';

  import { LANGUAGES } from './data/languages';
  import Languages from './components/Languages.svelte';

  import PrintButton from './components/PrintButton.svelte';

</script>

<main class="cv-container">

  <PersonalInfo personalInfo={PERSONAL_INFO} />
  <ProfessionalSummary professionalSummary={PROFESSIONAL_SUMMARY} />
  <Education education={EDUCATION} />
  <WorkExperience workExperience={WORK_EXPERIENCE} />
  <TeachingExperience teachingExperience={TEACHING} />
  <Languages languages={LANGUAGES} />

</main>

<PrintButton />