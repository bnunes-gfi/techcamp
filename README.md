Technical Campaigns

SUMMARY:
* Technical Campaigns app for Toyota Europe Motor.

DESCRIPTION:
* Upload Table
* Set Up Table
* Validation
* Simulation

ARCHITECTURE AND TECHNOLOGY:
* JVM: 1.8.0_161
* Frontend: ReactJS (v.16.2.0), babeljs, webpack, react-router, reactstrap, bootstrap 4, etc.
* Backend: Spring boot (v1.5.10), Lombok
* JPA: Spring Boot Data JPA, Spring Boot Data Rest
* Tools & test: Intellij IDEA, maven (v3.5.2) and junit
* Database: Sql Server 2012

REQUIREMENTS DEVELOPMENT:
* JDK 1.8.x
* Maven 3
* Node 8.9.4

REQUIREMENTS PRODUCTION:
* JRE 1.8

INSTRUCTIONS:
You need to change the development and production properties in src\resources\application.yml file:
* Development
    * Option 1:
        * mvn clean install  
        * java -jar target\techcamp-x.y.z.jar
    * Option 2:
        * mvn clean spring-boot:run 
    * node start  (another terminal)

* Production
    * java -jar -Dspring.profiles.active=production target\techcamp-x.y.z.jar
    
RELEASES:
* v.0.0.7
- Bug detected. Wrong column 'campuioValidatedCd' being displayed instead of 'campuioFinalDecisionQty' column.
* v.0.0.6
- Add approve action in VALIDATION UI
- Add errors control in edit fields all UI
* v.0.0.5
- NMSC UIO UI
- NMSC Priority UI
* v.0.0.4
- Edit in Validation UI
* v.0.0.3
- Validation UI without edit action
* v.0.0.2
- Home UI
- Implementation target UI
* v.0.0.1
- Vin Sumarry UI





