package com.atlas.app.dvla.util;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.FileInputStream;
import java.util.Properties;

public class WebConnector {
    Properties OR = null;
    Properties CONFIG=null;
    WebDriver driver = null;

    // reference to webdrivers for each browser type
    WebDriver mozilla = null;
    WebDriver chrome = null;
    WebDriver ie = null;
    public static WebConnector w;


    // make the constructor private so that no object of it can be crated directly
    // singleton class
    private WebConnector() {
        try{
            System.out.println("path = " + System.getProperty("user.dir"));
            // initialize OR
            OR = new Properties();
            FileInputStream fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\atlas\\app\\dvla\\config\\OR.properties");
            OR.load(fs);



            printProperties(OR);
            printProperties(CONFIG);

        } catch (Exception e) {
            System.out.println("Error: error in initiailizing properties file");
        }
    }


    // opening the browser
    public void openBrowser(String browserType){

        if(browserType.equals("Mozilla") && mozilla == null){
            System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"//drivers//geckodriver.exe");
            driver = new FirefoxDriver();
            mozilla = driver;
        }
        else if(browserType.equals("Mozilla") && mozilla != null)
        {
            driver = mozilla;
        }
        else if(browserType.equals("Chrome") && chrome == null){
            System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//drivers//chromedriver.exe");
            driver=new ChromeDriver();
            chrome = driver;
        }
        else if(browserType.equals("Chrome") && chrome != null)
        {
            driver = chrome;
        }
        else if(browserType.equals("IE") && ie == null){
            // set the IE server exe path and initialize
        }

        // maximize the browser window
        driver.manage().window().maximize();
        // implicit wait - global timeout before element not found error is thrown
        //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }


    public void navigate(String URL)
    {
        System.out.println("Going to URL :" + OR.getProperty(URL));
        driver.get(OR.getProperty(URL));
    }

    public void click(String objectName)
    {
        driver.findElement(By.xpath(OR.getProperty(objectName))).click();
    }

    public void type(String text, String objectName)
    {
        driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
    }

    public void select(String text, String objectName)
    {
        if(isElementPresent(objectName))
         driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
    }

    public String getText(String objectName)
    {
        return driver.findElement(By.xpath(OR.getProperty(objectName))).getText();
    }

    public boolean isElementPresent(String objectName)
    {
       //return driver.findElements(By.xpath(OR.getProperty(objectName))).size() > 0 ? true : false;

      WebElement we =  (new WebDriverWait(driver, 30)).until(ExpectedConditions.presenceOfElementLocated(By.xpath(OR.getProperty(objectName))));
      if(we != null)
          return true;

      return false;

    }


// implemment singleton behaviour
    public static WebConnector getInstance()
    {
        if (w == null)
            w = new WebConnector();

        return w;

    }


    public void printProperties( Properties props)
    {
       // System.out.println("Print Properties : " + props.toString());
       //props.forEach( (key, value) -> System.out.println(key + " : " + value) );
    }




}
