# OpenMRS Search Concept OWA
This the repository for the Search Concept OWA.

# Implement
To implement this web app first clone the repository

    git clone https://github.com/Vincentes/openmrs-owa-search-concept.git

Change directory to the downloaded folder
    
    cd openmrs-owa-search-concept

Then on Linux zip the current folder
    
    zip -r openmrs-search-concept.zip .
    
The crossplatform way of doing this is using Java
    
    jar -cf openmrs-search-concept.zip .

Once you have zipped the folder, go to the OWA module "Manage Apps" page on Advanced Administration.
    
    http://localhost:8081/openmrs-standalone/module/owa/manage.form
    
The directory varies depending on what OpenMRS installation you have. Generally, if you deployed OpenMRS on Tomcat you can go to this directory:
    
    http://localhost:8080/openmrs/module/owa/manage.form

From there, select "Browse" and choose the zip file you created. **Note** you *must* upload a **zip** file for OWA.
Finally, click on "Upload".
