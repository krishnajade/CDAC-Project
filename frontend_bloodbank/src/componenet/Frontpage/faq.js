import React from "react";
import './faq.css';
const Faq= () => {
    return(
        <div  id="faq-ques">
            
             
            <h1>Frequently Asked Questions</h1><br/> <br/>  
            <p className="h4">Information for Patients and Donors</p>
 
<div className="accordion">
    <div className="accordion-tab">      
    <input type="checkbox" id="toggle1" className="accordion-toggle" name="toggle"></input>
    <label for="toggle1">Why should I donate blood ?</label>
    <div className="accordion-content">
    <p>You have to donate blood yourself to find out. By Blood donation you greatly contribute towards a healthier, happier society by making available safe blood. Any one may need blood at any time may be ourselves or our near  ones. You also benefit in other ways by donating blood as it reduces the chances of ischemic heart diseases</p>    
    </div>
</div>
 
<div className="accordion">
    <div className="accordion-tab">      
    <input type="checkbox" id="toggle2" className="accordion-toggle" name="toggle"></input>
    <label for="toggle2">Are their any side effects of Blood donations ?</label>
    <div className="accordion-content">
    <p>There are no side effects of blood donation. The Blood bank staff ensures that your blood donation is a good experience as far as possible to enable you to become a repeat and a regular blood donor. There are a number of people who have donated   more tha25-100 times in their life time.</p>    
    </div>
</div>

<div className="accordion">
    <div className="accordion-tab">      
    <input type="checkbox" id="toggle3" className="accordion-toggle" name="toggle"></input>
    <label for="toggle3">Can I get any disease like AIDS or Hepatitis or any other disease by Blood donation ?</label>
    <div className="accordion-content">
    <p>As only sterile disposables are used to collect  blood and these disposables can be used only one time it eliminates any chances of acquiring any disease from blood donation.</p>    
    </div>
    </div>
</div>


<div className="accordion">
    <div className="accordion-tab">      
    <input type="checkbox" id="toggle4" className="accordion-toggle" name="toggle"></input>
    <label for="toggle4">What are the eligibility criteria of blood donation ?</label>
    <div className="accordion-content">
    <p>The eligible donors  should be  between 18 to 60 years of age, having a healthy pattern of lifestyle  The body weight should be above 45 kgs.  The haemoglobin should be above 12.5 </p>    
    </div>
    </div>
</div>
 
<div className="accordion">
    <div className="accordion-tab">      
    <input type="checkbox" id="toggle5" className="accordion-toggle" name="toggle"></input>
    <label for="toggle5">How often can I donate Blood ?</label>
    <div className="accordion-content">
    <p> After every three –four months you can donate blood.</p>    
    </div>
    </div>
</div>

<div className="accordion">
    <div className="accordion-tab">      
    <input type="checkbox" id="toggle6" className="accordion-toggle" name="toggle"></input>
    <label for="toggle6">What should I eat before blood-donation ?</label>
    <div className="accordion-content">
    <p> Anything that you normally eat at home., Eat a  light snacks and a cold drink  before blood donation  is sufficient.</p>    
    </div>
    </div>
</div>

<div className="accordion">
    <div className="accordion-tab">      
    <input type="checkbox" id="toggle7" className="accordion-toggle" name="toggle"></input>
    <label for="toggle7">How much  time does it take to donate blood ?</label>
    <div className="accordion-content">
    <p> You will be asked to fill a donor form. Your medical history will be taken by a medical personnel and  a small drop of blood to check blood group as well as  Hb for anemia. After  simple medical screening process and being found medically fit to donate, you will be sent to blood collection  room. The actual blood collection from the donor takes about 7-10 minutes followed by a little rest and refreshments.</p>    
    </div>
    </div>
</div>

<div className="accordion">
    <div className="accordion-tab">      
    <input type="checkbox" id="toggle8" className="accordion-toggle" name="toggle"></input>
    <label for="toggle8">What happens to blood I donate </label>
    <div className="accordion-content">
    <p> Your blood in the blood bank is processed and within 6 hours of Blood collection It  is separated into components viz. Red Cells, White Cells, Plasma & Platelets. These Blood components are made available for the patients. By making blood components, all the useful parts of blood can be used and from one unit of blood four patients can be benefited..</p>    
    </div>
    </div>
</div>










<br/> <br/> 
<p className="h4">Post Donation care :</p>
<p>Care that a donor should take after donating blood:</p>
<ul className> 
<li>Eat and Drink  the refreshment provided before leaving the blood bank</li>
<li>Drink more liquids than usual in next 4 hours</li>
<li>Avoid consuming alcohol until you have eaten something</li>
<li>Don't smoke for next 30 minutes</li>
<li>Avoid climbing stairs for next 30 minutes</li>
<li>If there is bleeding from the phlebotomy site, raise the arm and apply pressure</li>
<li>If fainting or dizziness occurs, either lie down or sit with the head between the knees</li>
</ul>
<br/> 
<br/> 
<p className="h4">Information for clinicians</p>
 

<p>Procedure for collection of blood sample of the patient to be sent to blood Bank for grouping crossmatching:</p>
 
 
<ul>
<li>Blood sample for grouping and crossmatching must be drawn by the Resident Doctor on duty and not by the Nursing Staff.</li>
<li>Place only one plain test tube (10 x 100 mm) procured from Blood Bank in the rack, label the tube with patients name, age/sex. CR No. ward/bed no.</li> 
<li>Take the rack with labeled tube to the patients side.</li>
<li>For identification of the patient follow the following procedure</li>
<li>If the patient is conscious at the time of taking the sample ask him or her toidentify themself by given name, bed No.</li>
<li>If the patient is unconscious ask the relative or second member of the staffto verify the patient’s identity Confirm  the particulars of the patient from  the  case file.</li>
<li>Draw 5 ml of blood and put in Prelabelled test tube.</li>
<li>Recheck the particulars and sign on the label of test tube.</li>
</ul>
 
<p className="h4">Do Not</p>
 

<ul>
<li>Do Not  Draw samples from the patient in an unlabelled tube.</li>
<li>Do Not keep more than one tube in the rack.</li>
<li>Do Not collect samples from  more than one patient at a time.</li>
</ul>
</div>
     </div>   
     </div>
    )
}
export default Faq;