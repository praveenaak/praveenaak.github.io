// ResumeView.vue
<template>
  <div class="resume-page">
    <TitleBar :show="true" />
    <div class="content">
      <h1 class="page-title">EXPERIENCE</h1>
      
      <div class="timeline-container">
        <!-- Vertical timeline line -->
        <div class="timeline-line"></div>
        
        <!-- Experience entries -->
        <div class="timeline-entries">
          <!-- Wilkes Center -->
          <div class="timeline-entry">
            <div class="timeline-dot"></div>
            <div class="timeline-date">
              <span>August<br>2024 -<br>Present</span>
            </div>
            <div class="timeline-content">
              <div class="job-header">
                <h3 class="job-title">GIS Software Developer</h3>
                <h4 class="company-name">Wilkes Center for Climate Science & Policy</h4>
                <div class="job-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Salt Lake City, UT</span>
                </div>
              </div>
              
              <div class="job-description">
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Led the full lifecycle development of geospatial web applications, from initial design and data processing to deployment.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Architected and deployed scalable applications for real-time wildfire risk assessment and carbon sequestration monitoring, leveraging React, Vue.js, and Mapbox while ensuring WCAG AAA compliance for accessibility.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Spearheaded the development of a high-performance data processing pipeline handling 1TB+ of historical spatio-temporal vector and raster data, utilizing parallel computing techniques to create optimized vector tiles.</p>
                </div>
              </div>
              
              <div class="tech-tags">
                <span class="tech-tag">Mapbox</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">HPC</span>
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Map tile servers</span>
              </div>
            </div>
          </div>
          
          <!-- NASA -->
          <div class="timeline-entry">
            <div class="timeline-dot"></div>
            <div class="timeline-date">
              <span>June 2024<br>-<br>September<br>2024</span>
            </div>
            <div class="timeline-content">
              <div class="job-header">
                <h3 class="job-title">Graduate Fellow</h3>
                <h4 class="company-name">NASA Goddard Space Flight Center</h4>
                <div class="job-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Greenbelt, MD</span>
                </div>
              </div>
              
              <div class="job-description">
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Engineered a scalable, open-source geospatial data processing pipeline using Python, optimizing integration of satellite data (MODIS) with in-situ observations & atmospheric models, successfully filling 40% of missing climate data for Phoenix.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Developed implementation of a geospatial data processing pipeline to process satellite data & integrate it with in-situ observations and atmospheric composition models.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Leveraged scientific programming in high-performance computing platforms to process large-scale raster imagery.</p>
                </div>
              </div>
              
              <div class="tech-tags">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Scientific programming</span>
                <span class="tech-tag">Machine Learning</span>
                <span class="tech-tag">Geospatial APIs</span>
              </div>
            </div>
          </div>
          
          <!-- ASU -->
          <div class="timeline-entry">
            <div class="timeline-dot"></div>
            <div class="timeline-date">
              <span>May 2023<br>-<br>May 2024</span>
            </div>
            <div class="timeline-content">
              <div class="job-header">
                <h3 class="job-title">Graduate Services Assistant - Geospatial Research</h3>
                <h4 class="company-name">Arizona State University</h4>
                <div class="job-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Tempe, AZ</span>
                </div>
              </div>
              
              <div class="job-description">
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Automated geospatial data pipeline for assessing tract-level social vulnerability for heat resilience in Arizona.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Formulated synthetic data for water pricing and air quality (PM2.5, PM10 and O3) on census-tract by applying spatial machine learning and developing algorithms to address 64% missing data.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Investigated advanced modeling projects including AC ownership patterns and 911 calls to forecast heat waves.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Developed GIS web-based applications and custom geospatial visualizations & communicating complex SVI data to both technical and non-technical audiences.</p>
                </div>
              </div>
              
              <div class="tech-tags">
                <span class="tech-tag">PostGIS</span>
                <span class="tech-tag">OpenLayers</span>
                <span class="tech-tag">Leaflet</span>
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Spatial ML</span>
              </div>
            </div>
          </div>
          
          <!-- Hexagon Software Engineer -->
          <div class="timeline-entry">
            <div class="timeline-dot"></div>
            <div class="timeline-date">
              <span>July 2021<br>-<br>July 2022</span>
            </div>
            <div class="timeline-content">
              <div class="job-header">
                <h3 class="job-title">Software Engineer</h3>
                <h4 class="company-name">Hexagon Geospatial</h4>
                <div class="job-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Hyderabad, India</span>
                </div>
              </div>
              
              <div class="job-description">
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Collaborated with cross-functional global teams to gather requirements for GIS operations using C# and .NET</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Administered network inventories & engineered custom commands for Utility companies geospatial data needs.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Transformed inventory map by integrating longitudinal asset views, improving user visual access to attributes.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Engineered data pipeline to vectorize hand-drawn raster maps using CNN models & accomplished 89% accuracy.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Programmed SQL solutions to manage and optimize geodatabases in an Enterprise Oracle Database environment.</p>
                </div>
              </div>
              
              <div class="tech-tags">
                <span class="tech-tag">C#</span>
                <span class="tech-tag">.NET</span>
                <span class="tech-tag">CNN</span>
                <span class="tech-tag">SQL</span>
                <span class="tech-tag">Oracle Database</span>
              </div>
            </div>
          </div>
          
          <!-- Hexagon Intern -->
          <div class="timeline-entry">
            <div class="timeline-dot"></div>
            <div class="timeline-date">
              <span>October<br>2020 -<br>June 2021</span>
            </div>
            <div class="timeline-content">
              <div class="job-header">
                <h3 class="job-title">Software Engineering Intern</h3>
                <h4 class="company-name">Hexagon Geospatial</h4>
                <div class="job-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Hyderabad, India</span>
                </div>
              </div>
              
              <div class="job-description">
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Developed a mobile GIS application using Xamarin, incorporating geometry customization features with the ESRI ArcGIS SDK</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Optimized an object detection model for large-scale manhole image analysis, achieving a detection accuracy of 92%</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Integrated custom commands into Hexagon NetWorks GIS software for utility companies using C# and .NET framework</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Optimized utility feature metadata creation process using SQL procedures, reducing processing time by 10%</p>
                </div>
              </div>
              
              <div class="tech-tags">
                <span class="tech-tag">Xamarin</span>
                <span class="tech-tag">ESRI ArcGIS SDK</span>
                <span class="tech-tag">C#</span>
                <span class="tech-tag">.NET</span>
                <span class="tech-tag">SQL</span>
                <span class="tech-tag">Object Detection</span>
              </div>
            </div>
          </div>
          
          <!-- NUS -->
          <div class="timeline-entry">
            <div class="timeline-dot"></div>
            <div class="timeline-date">
              <span>December<br>2020 -<br>January<br>2021</span>
            </div>
            <div class="timeline-content">
              <div class="job-header">
                <h3 class="job-title">Intern</h3>
                <h4 class="company-name">National University Singapore</h4>
                <div class="job-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Singapore</span>
                </div>
              </div>
              
              <div class="job-description">
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Led a 6-member team in medical imaging research on detecting abnormality in musculoskeletal radiographs.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Researched and experimented transfer learning on deep neural networks for precise prediction & localization.</p>
                </div>
                <div class="responsibility">
                  <span class="bullet">❯</span>
                  <p>Created a web-based Flask app to provide an interface, enabling users to interact with the model effectively.</p>
                </div>
              </div>
              
              <div class="tech-tags">
                <span class="tech-tag">Deep Learning</span>
                <span class="tech-tag">Flask</span>
                <span class="tech-tag">Medical Imaging</span>
                <span class="tech-tag">Python</span>
              </div>
            </div>
          </div>
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
          <div class="timeline-entry">
            <div class="timeline-dot"></div>
            <div class="timeline-date">
              <span>May<br>2024</span>
            </div>
            <div class="timeline-content">
              <div class="education-header">
                <h3 class="degree-title">M.S., Computer Science</h3>
                <h4 class="institution-name">Arizona State University, Tempe</h4>
                <div class="gpa">3.8 GPA</div>
              </div>
            </div>
          </div>
          
          <!-- Bachelor's -->
          <div class="timeline-entry">
            <div class="timeline-dot"></div>
            <div class="timeline-date">
              <span>May<br>2021</span>
            </div>
            <div class="timeline-content">
              <div class="education-header">
                <h3 class="degree-title">B. Tech + M. Tech (Dual Degree), Computer Engineering</h3>
                <h4 class="institution-name">Indian Institute of Information Technology, Kancheepuram, India</h4>
                <div class="gpa">8.3 GPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TitleBar from '../components/hello/EarthAnimation/TitleBar.vue'

export default defineComponent({
  name: 'Resume',
  components: {
    TitleBar
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.resume-page {
  min-height: 100vh;
  font-family: 'VT323', monospace;
  background-color: #f5f5f5;
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
  color: #000;
}

@media (min-width: 768px) {
  .page-title {
    font-size: 3rem;
  }
}

/* Timeline container */
.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Vertical timeline line */
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 170px;
  width: 10px;
  background-color: #4db6ac; /* Teal color as third color */
  transform: translateX(-50%);
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(77, 182, 172, 0.3);
}

@media (max-width: 768px) {
  .timeline-line {
    left: 85px;
    width: 8px;
  }
}

/* Timeline entries */
.timeline-entries {
  position: relative;
}

.timeline-entry {
  position: relative;
  margin-bottom: 50px;
  display: flex;
}

/* Timeline date */
.timeline-date {
  position: absolute;
  left: 10px;
  width: 140px;
  text-align: center;
  padding-right: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.timeline-date span {
  display: block;
  padding: 8px;
  background-color: rgba(77, 182, 172, 0.1);
  border-radius: 4px;
  border-left: 4px solid #4db6ac;
  text-align: center;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .timeline-date {
    left: 0;
    width: 70px;
    font-size: 1.1rem;
  }
  
  .timeline-date span {
    padding: 5px;
    border-left-width: 3px;
  }
}

/* Timeline dot */
.timeline-dot {
  position: absolute;
  left: 170px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #893168; /* Primary purple color */
  transform: translate(-50%, 0);
  z-index: 1;
  border: 6px solid #f5f5f5;
  box-shadow: 0 0 0 6px #4db6ac, 0 0 20px rgba(77, 182, 172, 0.6); /* Matching timeline color + glow */
}

@media (max-width: 768px) {
  .timeline-dot {
    left: 85px;
    width: 26px;
    height: 26px;
    border-width: 5px;
    box-shadow: 0 0 0 5px #4db6ac, 0 0 15px rgba(77, 182, 172, 0.6);
  }
}

/* Timeline content */
.timeline-content {
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  padding: 20px;
  margin-left: 200px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: calc(100% - 200px);
  position: relative;
}

.timeline-content:before {
  content: '';
  position: absolute;
  left: -15px;
  top: 20px;
  width: 15px;
  height: 15px;
  background-color: #fff;
  transform: rotate(45deg);
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
}

.timeline-content:hover {
  transform: translateY(-4px);
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .timeline-content {
    margin-left: 115px;
    width: calc(100% - 115px);
    padding: 15px;
  }
  
  .timeline-content:before {
    left: -10px;
    width: 10px;
    height: 10px;
  }
}

/* Job header */
.job-header {
  margin-bottom: 1rem;
}

.job-title {
  font-size: 1.8rem;
  margin-bottom: 0.25rem;
  color: #000;
}

.company-name {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #333;
}

@media (max-width: 768px) {
  .job-title {
    font-size: 1.5rem;
  }
  
  .company-name {
    font-size: 1.2rem;
  }
}

/* Job location */
.job-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

/* Job description */
.job-description {
  margin-bottom: 1rem;
}

.responsibility {
  display: flex;
  margin-bottom: 0.75rem;
}

.bullet {
  color: #4db6ac; /* Matching timeline color */
  font-weight: bold;
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

.responsibility p {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.4;
  flex: 1;
}

@media (max-width: 768px) {
  .responsibility p {
    font-size: 1rem;
  }
}

/* Tech tags */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: #4db6ac; /* Matching timeline color */
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  display: inline-block;
}

@media (max-width: 768px) {
  .tech-tag {
    font-size: 0.9rem;
    padding: 0.2rem 0.5rem;
  }
}

/* Education Section */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin: 4rem 0 3rem;
  color: #000;
}

.education-container {
  margin-top: 2rem;
}

.education-header {
  padding: 0.5rem 0;
}

.degree-title {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: #000;
}

.institution-name {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.gpa {
  font-size: 1.2rem;
  color: #4db6ac;
  font-weight: bold;
}
</style>