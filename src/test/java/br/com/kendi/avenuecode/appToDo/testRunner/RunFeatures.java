package br.com.kendi.avenuecode.appToDo.testRunner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Features", glue ="br.com.kendi.avenuecode.appToDo.steps", 
plugin = { "pretty", "html:target/htmlreports" })


public class RunFeatures {
	
    @AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("Config/Report.xml"));
    
    }
    
    
}
