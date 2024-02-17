import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const Plants = () => {
  return (
    <>
            <div className='plantstab'>
                <div className='container'>
                    <div className='row'>
                            <div className='web-container'>
                                <div className='title'>
                                    <h2>Plants & Offices</h2>
                                </div>
                        <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                  <TabList>
                    <Tab>Gurugram & New Delhi</Tab>
                    <Tab>Jammu</Tab>
                    <Tab>Faridabad</Tab>
                    <Tab>Noida</Tab>
                    <Tab>Greater Noida</Tab>
                    <Tab>Kanpur</Tab>
                    <Tab>Andhra Pradesh</Tab>
                  </TabList>
                  <TabPanel>
                        <div className='plantbox'>
                        <div class="adrssblk">
                                                    <h4>N.S. CONCRETES (P) LTD.</h4>
                                                    <p>Jakheera, New Delhi</p>
                                                    <p><strong>Sales :</strong> <a href="tel:+91118130495551">+91 - 11- 8130495551</a></p>
                                                    {/* <p><strong>Production :</strong> <a href="tel:+91118130495520">+91 - 11- 8130495520</a></p> */}
                                                </div>
                                                {/* <div class="adrssblk">
                                                    <h4>N.S. CONCRETES (P) LTD.</h4>
                                                    <p>Sector-68, Supertech Hues, Gurugram </p>
                                                    <p><strong>Sales :</strong> <a href="tel:+91118130495501">+91 - 11- 8130495501</a></p>
                                                    <p><strong>Production :</strong> <a href="tel:+91118130495504">+91 - 11- 8130495504</a></p>
                                                </div> */}
                                                <div class="adrssblk">
                                                    <h4>N.S. CONCRETES (P) LTD.</h4>
                                                    <p>Village – Aklimpur, Badshahpur, Gurugram</p>
                                                    <p><strong>Sales :</strong> <a href="tel:+91118130495501">+91 - 11- 8130495501</a></p>
                                                    <p><strong>Production :</strong> <a href="tel:+91118130495510">+91 - 11- 8130495510</a></p>
                                                </div>
                                                <div class="adrssblk">
                                                    <h4>NATIONAL STONE CRUSHING CO.</h4>
                                                    <p>Raisena Sohna Road, Sohna, Gurugram</p>
                                                    <p><strong>Sales :</strong> <a href="tel:+91119811274614">+91 - 11- 9811274614</a></p>
                                                </div>
                                                <div class="adrssblk">
                                                    <h4>N.S. CONCRETES (P) LTD.</h4>
                                                    <p>Opposite Daulabad Village, Near Dwarka Expressway, Gurugram</p>
                                                    <p><strong>Sales :</strong> <a href="tel:+91118130495521">+91 - 11- 8130495521</a></p>
                                                    <p><strong>Production :</strong> <a href="tel:+91118130495530">+91 - 11- 8130495530</a></p>
                                                </div>
                                                {/* <div class="adrssblk">
                                                    <h4>N.S. CONCRETES (P) LTD.</h4>
                                                    <p>Village – Basai, Near Sector 37 D, <br />Dwarka Expressway, Gurugram</p>
                                                    <p><strong>Sales :</strong> <a href="tel:+91118130495521">+91 - 11- 8130495521</a></p>
                                                    <p><strong>Production :</strong> <a href="tel:+91118130495520">+91 - 11- 8130495520</a></p>
                                                </div> */}
                                                <div class="adrssblk">
                                                    <h4>N.S. Buildtech (P) LTD.</h4>
                                                    <p>Gurugram</p>
                                                    <p><strong>Sales :</strong> <a href="tel:+91119811074414">+91 - 11- 9811074414</a></p>
                                                </div>
                                                <div class="adrssblk">
                                                    <h4>Sohna Aggregate Solutions</h4>
                                                    <p>Charkhi Dadri</p>
                                                    <p><strong>Sales :</strong> <a href="tel:+91119560950056">+91 - 11- 9560950056</a></p>
                                                </div>
                                                <div class="adrssblk">
                                                    <h4>Jai Hind Enterprises</h4>
                                                    <p>Gurugram</p>
                                                    <p><strong>Sales :</strong> <a href="tel:+91118130495566">+91 - 11- 8130495566</a></p>
                                                </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='plantbox'>
                        <div class="adrssblk">
                                                    <h4>N.S. CONCRETES (P) LTD.</h4>
                                                    <p>Jammu</p>
                                                    <p><strong>Sales:</strong> <a href="tel:+91118130495564">+91 - 11- 8130495564</a></p>
                                                    <p><strong>Production:</strong> <a href="tel:+91118130495558">+91 - 11- 8130495558</a></p>
                                                </div>
                        </div>
                        </TabPanel>
                    <TabPanel>
                        <div className='plantbox'>
                        <div class="adrssblk">
                                                    <h4>N.S. CONCRETE SOLUTIONS (P) LTD.</h4>
                                                    <p>Mathura Road, Sector-31 Faridabad</p>
                                                    <p><strong>Sales:</strong> <a href="tel:+91118130495571">+91 - 11- 8130495571</a></p>
                                                    <p><strong>Production:</strong> <a href="tel:+91118130495560">+91 - 11- 8130495560	</a></p>
                                                </div>
                                                <div class="adrssblk">
                                                    <h4>N.S. CONCRETE SOLUTIONS (P) LTD.</h4>
                                                    <p>Mata Amritanandamayi Hospital, Sector-88 Faridabad</p>
                                                    <p><strong>Sales:</strong> <a href="tel:+91118130495561">+91 - 11- 8130495561</a></p>
                                                    <p><strong>Production:</strong> <a href="tel:+91118130495565">+91 - 11- 8130495565</a></p>
                                                </div>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        {/* <div className='plantbox'>
                        <div class="adrssblk">
                                                    <h4>N S READYMIX (P) LTD.</h4>
                                                    <p>Sector-144, Gulshan Homes, Noida</p>
                                                    <p><strong>Sales:</strong> <a href="tel:+91118130495599">+91 - 11- 8130495599</a></p>
                                                </div>
                        </div> */}
                        </TabPanel>
                        <TabPanel>
                        <div className='plantbox'>
                        <div class="adrssblk">
                                                    <h4>N S READYMIX (P) LTD.</h4>
                                                    <p>C – 39, Site – C, Industrial Area <br />Surajpur, Greater Noida, U.P.</p>
                                                    <p><strong>Sales:</strong> <a href="tel:+91118130495611">+91 - 11- 8130495611</a></p>
                                                    <p><strong>Production:</strong> <a href="tel:+91118130495600">+91 - 11- 8130495600</a></p>
                                                </div>
                                                <div class="adrssblk">
                                                    <h4>N S READYMIX (P) LTD.</h4>
                                                    <p>Cleo County, Greater Noida, U.P.</p>
                                                    <p><strong>Sales:</strong> <a href="tel:+91118130495691">+91 - 11- 8130495691</a></p>
                                                    <p><strong>Help Line No:</strong> <a href="tel:+91118130495600">+91 - 11- 8130495600</a></p>
                                                </div>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className='plantbox'>
                        <div class="adrssblk">
                                                    <h4>N S READYMIX (P) LTD.</h4>
                                                    <p>Kanpur, Ghatampur, U.P.</p>
                                                    <p><strong>Sales&nbsp;:</strong> <a href="tel:+91118130495601">+91 - 11- 8130495612</a></p>
                                                    <p><strong>Production&nbsp;:</strong> <a href="tel:+91118130495602">+91 - 11- 8130495615</a></p>
                                                </div>
                        </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='plantbox'>
                            <div class="adrssblk">
                                                    <h4>N.S. CONCRETE SOLUTIONS (P) LTD.</h4>
                                                    <p>Mata Amritanandamayi University Amaravati, Andhra Pradesh</p>
                                                    <p><strong>Sales&nbsp;:</strong> <a href="tel:+911118130495555">+91 - 11- 8130495555</a></p>
                                                    <p><strong>Production&nbsp;:</strong> <a href="tel:+911119959856175">+91 - 11- 9959856175</a></p>
                                                  </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                    </div>                    
                    </div>
                </div>
            </div>
    </>
  )
}
