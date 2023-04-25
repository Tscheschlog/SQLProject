const getSql = require('./getSql.js');


getSql.insertData('internship', {title: 'Data Science Intern', start_date: '2023-04-25', end_date: '2023-10-25', status: '0', company_id: 2, student_id: 5})

// getSql.insertData('company', {name: 'Virtual Solutions Inc.'});
// getSql.insertData('company', {name: 'Data Insights Co.'});

// getSql.deleteData('form', 'title = \'Data Science Intern\'');
// console.log("DROPPED");

// getSql.createTable(
//     'form',
//     'form_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
//     'title VARCHAR (50)',
//     'description TEXT',
//     'UNIQUE (form_id)'
//   );
// console.log("CREATED");

// getSql.insertData('form', {title: 'Data Science Intern', description: `"Company: Data Insights Co.\
// \n\nAbout the Job: \
// \nAs a Data Science Intern, you will have the opportunity to work alongside our team of experienced data scientists to assist with various data analysis and modeling projects. You will be responsible for collecting and cleaning data, developing and testing statistical models, and creating data visualizations to communicate results.\
// \n\nValue:\
// \nThis internship provides a unique opportunity to gain hands-on experience in the field of data science and analytics. You will have the chance to work on real-world projects and build skills that will be valuable in your future career. In addition, you will receive mentorship and guidance from our experienced data science team.\
// \n\nResponsibilities:\
// \nCollect and clean data from various sources\
// \nDevelop and test statistical models using Python or R\
// \nCreate data visualizations to communicate results\
// \nAssist with the development of predictive models and machine learning algorithms\
// \nCollaborate with team members on data analysis projects\
// \n\nAbout you:\
// \nStrong analytical and problem-solving skills\
// \nFamiliarity with data analysis and statistical modeling techniques\
// \nProficiency in Python or R\
// \nExcellent communication and collaboration skills\
// \nSelf-motivated and eager to learn\
// \n\nAbout us:\
// \nData Insights Co. is a data science consulting firm that specializes in helping businesses make better decisions through data analysis and modeling. Our team of experienced data scientists has worked with clients in a variety of industries, from healthcare to finance to e-commerce.\
// \n\nQualifications:\
// \nCurrently enrolled in a Bachelor's or Master's degree program in a quantitative field such as Computer Science, Mathematics, or Statistics\
// \nFamiliarity with data analysis and statistical modeling techniques\
// \nProficiency in Python or R\
// \nStrong written and verbal communication skills\
// \nAbility to work independently and collaboratively with team members`});
// console.log("ADDED");















