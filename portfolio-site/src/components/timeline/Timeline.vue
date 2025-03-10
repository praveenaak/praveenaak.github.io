// Timeline.vue
<template>
  <div class="timeline-container">
    <div class="timeline">
      <div
        v-for="(item, index) in experiences"
        :key="index"
        class="timeline-item"
        :class="{ left: index % 2 === 0, right: index % 2 === 1 }"
      >
        <div class="timeline-content" :class="{ 'fade-in': true }">
          <div class="timeline-date">{{ item.date }}</div>
          <h3 class="timeline-title">{{ item.title }}</h3>
          <h4 class="timeline-company">{{ item.company }}</h4>
          <div class="timeline-location">
            <svg
              class="location-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {{ item.location }}
          </div>
          <ul class="timeline-responsibilities">
            <li v-for="(responsibility, rIndex) in item.responsibilities" :key="rIndex">
              {{ responsibility }}
            </li>
          </ul>
          <div class="timeline-tech" v-if="item.technologies">
            <span v-for="(tech, tIndex) in item.technologies" :key="tIndex" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Timeline',
  data() {
    return {
      experiences: [
        {
          date: 'August 2024 - Present',
          title: 'GIS Software Developer',
          company: 'Wilkes Center for Climate Science & Policy',
          location: 'Salt Lake City, UT',
          responsibilities: [
            'Led the full lifecycle development of geospatial web applications, from initial design and data processing to deployment.',
            'Architected and deployed scalable applications for real-time wildfire risk assessment and carbon sequestration monitoring, leveraging React, Vue.js, and Mapbox while ensuring WCAG AAA compliance for accessibility.',
            'Spearheaded the development of a high-performance data processing pipeline handling 1TB+ of historical spatio-temporal vector and raster data, utilizing parallel computing techniques to create optimized vector tiles.',
          ],
          technologies: ['Mapbox', 'JavaScript', 'HPC', 'Python', 'Map tile servers'],
        },
        {
          date: 'June 2024 - September 2024',
          title: 'Graduate Fellow',
          company: 'NASA Goddard Space Flight Center',
          location: 'Greenbelt, MD',
          responsibilities: [
            'Engineered a scalable, open-source geospatial data processing pipeline using Python, optimizing integration of satellite data (MODIS) with in-situ observations & atmospheric models, successfully filling 40% of missing climate data for Phoenix.',
            'Developed implementation of a geospatial data processing pipeline to process satellite data & integrate it with in-situ observations and atmospheric composition models.',
            'Leveraged scientific programming in high-performance computing platforms to process large-scale raster imagery.',
          ],
          technologies: ['Python', 'Scientigic programming', 'Machine Learning', 'Geospatial APIs'],
        },
        {
          date: 'May 2023 - May 2024',
          title: 'Graduate Services Assistant - Geospatial Research',
          company: 'Arizona State University',
          location: 'Tempe, AZ',
          responsibilities: [
            'Automated geospatial data pipeline for assessing tract-level social vulnerability for heat resilience in Arizona.',
            'Formulated synthetic data for water pricing and air quality (PM2.5, PM10 and O3) on census-tract by applying spatial machine learning and developing algorithms to address 64% missing data.',
            'Investigated advanced modeling projects including AC ownership patterns and 911 calls to forecast heat waves.',
            'Developed GIS web-based applications and custom geospatial visualizations & communicating complex SVI data to both technical and non-technical audiences.',
          ],
          technologies: ['PostGIS', 'OpenLayers', 'Leaflet', 'Python', 'Spatial ML'],
        },
        {
          date: 'July 2021 - July 2022',
          title: 'Software Engineer',
          company: 'Hexagon Geospatial',
          location: 'Hyderabad, India',
          responsibilities: [
            'Collaborated with cross-functional global teams to gather requirements for GIS operations using C# and .NET',
            'Administered network inventories & engineered custom commands for Utility companies geospatial data needs.',
            'Transformed inventory map by integrating longitudinal asset views, improving user visual access to attributes.',
            'Engineered data pipeline to vectorize hand-drawn raster maps using CNN models & accomplished 89% accuracy.',
            'Programmed SQL solutions to manage and optimize geodatabases in an Enterprise Oracle Database environment.',
          ],
          technologies: ['C#', '.NET', 'CNN', 'SQL', 'Oracle Database'],
        },
        {
          date: 'October 2020 - June 2021',
          title: 'Software Engineering Intern',
          company: 'Hexagon Geospatial',
          location: 'Hyderabad, India',
          responsibilities: [
            'Developed a mobile GIS application using Xamarin, incorporating geometry customization features with the ESRI ArcGIS SDK',
            'Optimized an object detection model for large-scale manhole image analysis, achieving a detection accuracy of 92%',
            'Integrated custom commands into Hexagon NetWorks GIS software for utility companies using C# and .NET framework',
            'Optimized utility feature metadata creation process using SQL procedures, reducing processing time by 10%',
          ],
          technologies: ['Xamarin', 'ESRI ArcGIS SDK', 'C#', '.NET', 'SQL', 'Object Detection'],
        },
        {
          date: 'December 2020 - January 2021',
          title: 'Intern',
          company: 'National University Singapore',
          location: 'Singapore',
          responsibilities: [
            'Led a 6-member team in medical imaging research on detecting abnormality in musculoskeletal radiographs.',
            'Researched and experimented transfer learning on deep neural networks for precise prediction & localization.',
            'Created a web-based Flask app to provide an interface, enabling users to interact with the model effectively.',
          ],
        },
      ],
    }
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.timeline-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
  font-family: 'VT323', monospace;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 2px;
  background: #000;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  margin-bottom: 40px;
  position: relative;
  width: 50%;
  padding: 0 40px;
}

.timeline-item.left {
  left: 0;
}

.timeline-item.right {
  left: 50%;
}

.timeline-content {
  padding: 20px;
  background: white;
  border: 2px solid #000;
  position: relative;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
}

.timeline-date {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #666;
}

.timeline-title {
  font-size: 1.8rem;
  margin-bottom: 5px;
  color: #000;
}

.timeline-company {
  font-size: 1.4rem;
  margin-bottom: 8px;
  color: #333;
}

.timeline-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #666;
}

.location-icon {
  color: #000;
}

.timeline-responsibilities {
  list-style-type: none;
  padding: 0;
  margin: 0 0 15px 0;
}

.timeline-responsibilities li {
  font-size: 1.2rem;
  margin-bottom: 8px;
  line-height: 1.4;
  position: relative;
  padding-left: 20px;
}

.timeline-responsibilities li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: #000;
}

.tech-tag {
  display: inline-block;
  padding: 4px 8px;
  margin: 4px;
  background: #000;
  color: white;
  border-radius: 4px;
  font-size: 1rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #000;
}

.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .timeline::before {
    left: 40px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 20px;
  }

  .timeline-item.right {
    left: 0;
  }
}
</style>
