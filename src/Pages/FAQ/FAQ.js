import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='navHeight container'>
            <p className='text-center display-4 text-success fw-semibold'>FAQs</p>
            <p className='text-center fs-5'>Everything you want to know about Blended Edu-Care</p>
            <p className='text-center mb-5'>Select from the following list of Product and Technical FAQs to find answers to commonly raised questions. If you are a new member of one of the services below, we encourage you to read through the relevent articles.</p>


            <Accordion className='aWidthOf mx-auto' defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" className='mb-3'>
                    <Accordion.Header>1. What is Blended Edu-care learning like?</Accordion.Header>
                    <Accordion.Body>
                        For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are different types of online courses and programs, and that they’ll have to decide which is best for them. Then, explain the types of courses you offer and how your online programs work to give them all the information they need. This not only gives them information, but it increases their trust because you’re being transparent and giving them straightforward answers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mb-3'>
                    <Accordion.Header>2. Can I learn at my own pace?</Accordion.Header>
                    <Accordion.Body>
                        This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available. Today’s world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning. As a bonus, you can even invite them to contact you for more information or to discuss what their options are.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='mb-3'>
                    <Accordion.Header> 3. What types of assignments do you give?</Accordion.Header>
                    <Accordion.Body>
                        Like knowing the format of online learning, people often want to know the type of work they’ll be doing when they take online courses. Be sure to provide a glimpse of what you offer here and link to previous projects or assignments if you can. You can also link to course or program pages. As long as you explain to people how the courses are taught and what they can expect in terms of coursework, you’ll be helping them make a better decision about their educational needs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='mb-3'>
                    <Accordion.Header>4. What are the requirements to take the courses or sign up with your website?</Accordion.Header>
                    <Accordion.Body>
                        People will want to know how to get started. You can link them to the pages on your website that help them through that process, but you’ll also want to take the time to explain it to them here. If you have certain enrollment windows, for example, list those. If payment or deposits are required, explain that, as well. Make sure that people know exactly what they need to do to take online courses from you, no matter what those courses might be.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='mb-3'>
                    <Accordion.Header> 5. Can I start a course at any date/time?</Accordion.Header>
                    <Accordion.Body>
                        Through online learning, you can enroll for a degree program any time that you have your prerequisites and finances in order. Often programs will fill up very quickly; therefore, it is best to sign on early, although you may have to wait an ample amount of time for classes to begin. If this is the case for you, take time to brush up on the topic basics so you will be prepared to hit the ground running when classes begin. Early registration is a great idea, when possible!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='mb-3'>
                    <Accordion.Header> 6. Can I finish my degree online?</Accordion.Header>
                    <Accordion.Body>
                        Like most adults who live busy lives, conventional school commitments might not work for you. Studying full-time on campus like a young college student isn’t always an option anymore. When you decide to finish your degree online, your personal attendance may not be required, depending on your degree level, of course. Also, students who are continuing an online program do not have to consider housing. With zero university housing worries, you also save on housing fees.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default FAQ;