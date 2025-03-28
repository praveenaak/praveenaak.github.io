<!-- ResumeView.vue -->
<template>
  <div class="resume-page">
    <Header :show="true" />
    <div class="content">
      <h1 class="page-title">EXPERIENCE</h1>
      
      <div class="timeline-container">
        <!-- Vertical timeline line -->
        <div class="timeline-line"></div>
        
        <!-- Experience entries -->
        <div class="timeline-entries">
          <!-- Wilkes Center -->
          <TimelineEntry
            date="August 2024 - Present"
            title="GIS Software Developer"
            company="Wilkes Center for Climate Science & Policy"
            location="Salt Lake City, UT"
            :responsibilities="[
              'Led the full lifecycle development of geospatial web applications, from initial design and data processing to deployment.',
              'Architected and deployed scalable applications for real-time wildfire risk assessment and carbon sequestration monitoring, leveraging React, Vue.js, and Mapbox while ensuring WCAG AAA compliance for accessibility.',
              'Spearheaded the development of a high-performance data processing pipeline handling 1TB+ of historical spatio-temporal vector and raster data, utilizing parallel computing techniques to create optimized vector tiles.'
            ]"
            :technologies="['Mapbox', 'JavaScript', 'HPC', 'Python', 'Map tile servers']"
          />
          
          <!-- NASA -->
          <TimelineEntry
            date="June 2024 - September 2024"
            title="Graduate Fellow"
            company="NASA Goddard Space Flight Center"
            location="Greenbelt, MD"
            :responsibilities="[
              'Engineered a scalable, open-source geospatial data processing pipeline using Python, optimizing integration of satellite data (MODIS) with in-situ observations & atmospheric models, successfully filling 40% of missing climate data for Phoenix.',
              'Developed implementation of a geospatial data processing pipeline to process satellite data & integrate it with in-situ observations and atmospheric composition models.',
              'Leveraged scientific programming in high-performance computing platforms to process large-scale raster imagery.'
            ]"
            :technologies="['Python', 'Scientific programming', 'Machine Learning', 'Geospatial APIs']"
          />
          
          <!-- ASU -->
          <TimelineEntry
            date="May 2023 - May 2024"
            title="Graduate Services Assistant - Geospatial Research"
            company="Arizona State University"
            location="Tempe, AZ"
            :responsibilities="[
              'Automated geospatial data pipeline for assessing tract-level social vulnerability for heat resilience in Arizona.',
              'Formulated synthetic data for water pricing and air quality (PM2.5, PM10 and O3) on census-tract by applying spatial machine learning and developing algorithms to address 64% missing data.',
              'Investigated advanced modeling projects including AC ownership patterns and 911 calls to forecast heat waves.',
              'Developed GIS web-based applications and custom geospatial visualizations & communicating complex SVI data to both technical and non-technical audiences.'
            ]"
            :technologies="['PostGIS', 'OpenLayers', 'Leaflet', 'Python', 'Spatial ML']"
          />
          
          <!-- Hexagon Software Engineer -->
          <TimelineEntry
            date="July 2021 - July 2022"
            title="Software Engineer"
            company="Hexagon Geospatial"
            location="Hyderabad, India"
            :responsibilities="[
              'Collaborated with cross-functional global teams to gather requirements for GIS operations using C# and .NET',
              'Administered network inventories & engineered custom commands for Utility companies geospatial data needs.',
              'Transformed inventory map by integrating longitudinal asset views, improving user visual access to attributes.',
              'Engineered data pipeline to vectorize hand-drawn raster maps using CNN models & accomplished 89% accuracy.',
              'Programmed SQL solutions to manage and optimize geodatabases in an Enterprise Oracle Database environment.'
            ]"
            :technologies="['C#', '.NET', 'CNN', 'SQL', 'Oracle Database']"
          />
          
          <!-- Hexagon Intern -->
          <TimelineEntry
            date="October 2020 - June 2021"
            title="Software Engineering Intern"
            company="Hexagon Geospatial"
            location="Hyderabad, India"
            :responsibilities="[
              'Developed a mobile GIS application using Xamarin, incorporating geometry customization features with the ESRI ArcGIS SDK',
              'Optimized an object detection model for large-scale manhole image analysis, achieving a detection accuracy of 92%',
              'Integrated custom commands into Hexagon NetWorks GIS software for utility companies using C# and .NET framework',
              'Optimized utility feature metadata creation process using SQL procedures, reducing processing time by 10%'
            ]"
            :technologies="['Xamarin', 'ESRI ArcGIS SDK', 'C#', '.NET', 'SQL', 'Object Detection']"
          />
          
          <!-- NUS -->
          <TimelineEntry
            date="December 2020 - January 2021"
            title="Intern"
            company="National University Singapore"
            location="Singapore"
            :responsibilities="[
              'Led a 6-member team in medical imaging research on detecting abnormality in musculoskeletal radiographs.',
              'Researched and experimented transfer learning on deep neural networks for precise prediction & localization.',
              'Created a web-based Flask app to provide an interface, enabling users to interact with the model effectively.'
            ]"
            :technologies="['Deep Learning', 'Flask', 'Medical Imaging', 'Python']"
          />
        </div>
      </div>
      
      <!-- Education Section -->
      <h2 class="section-title">EDUCATION</h2>
      <div class="timeline-container education-container">
        <!-- Vertical timeline line -->
        <div class="timeline-line"></div>
        
        <!-- Education entries -->
        <div class="timeline-entries">
          <!-- Master's -->
          <EducationEntry
            date="May 2024"
            degree="M.S., Computer Science"
            institution="Arizona State University, Tempe"
            gpa="3.8"
          />
          
          <!-- Bachelor's -->
          <EducationEntry
            date="May 2021"
            degree="B. Tech + M. Tech (Dual Degree), Computer Engineering"
            institution="Indian Institute of Information Technology, Kancheepuram, India"
            gpa="8.3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/layout/Header.vue'
import TimelineEntry from '@/components/resume/TimelineEntry.vue'
import EducationEntry from '@/components/resume/EducationEntry.vue'

export default defineComponent({
  name: 'ResumeView',
  components: {
    Header,
    TimelineEntry,
    EducationEntry
  }
})
</script>

<style scoped>
.resume-page {
  min-height: 100vh;
  background-color: var(--background-light);
  padding-bottom: 3rem;
}

.content {
  padding-top: 80px;
  padding-bottom: 2rem;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
  color: var(--text-primary);
}

@media (min-width: 768px) {
  .page-title {
    font-size: 3rem;
  }
}
</style>