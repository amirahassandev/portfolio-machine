
var certificate_links = 
    [
        'Microsoft.pdf',
        'Mobtakeron.pdf',
        'DEPI.jpeg',
        'Cluster%20Analysis%20in%20Python.pdf', 
        'Dimensionality%20Reduction%20in%20Python.pdf', 
        'Feature%20Engineering%20for%20Machine%20Learning%20in%20Python.pdf',
        'Linear%20Classifiers%20in%20Python.pdf',
        'Machine%20Learning%20with%20Tree-Based%20Models%20in%20Python.pdf',
        'Model%20Validation%20in%20Python.pdf',
        'Preprocessing%20for%20Machine%20Learning%20in.pdf',
        'Supervised%20Learning%20with%20scikit-learn.pdf',
        'Python%20Programming%20Basics.pdf',
        
    ];

var certificate_titles = 
    [
        'Microsoft Learn Student Ambassadors',
        'Introduction to Artificial Intelligence and Machine Learning with Quantum Computing Foundations',
        'Digital Egypt Pioneers Initiative (DEPI)',
        'Cluster Analysis in Python', 
        'Dimensionality Reduction in Python',
        'Feature Engineering for Machine Learning in Python',
        'Linear Classification in Python',
        'Machine Learning with Tree-Based Models in Python',
        'Model Validation in Python',
        'Preprocessing for Machine Learning in Python',
        'Supervised Learning with scikit-learn',
        'Python Programming Basics',
        

    ];

var certificate_desc = 
[
    'I successfully completed the Microsoft Azure AI Fundamentals course, gaining a solid foundation in Artificial Intelligence and Machine Learning. This training provided hands-on experience with Microsoft Azure AI tools, covering Computer Vision, Natural Language Processing (NLP), Knowledge Mining, Generative AI, and Responsible AI. This experience has strengthened my understanding of AI concepts and enhanced my ability to build intelligent solutions using Azure.',
    'Completed an in-depth course on AI and machine learning fundamentals, including deep learning, natural language processing (NLP), and supervised/unsupervised learning techniques. Gained foundational knowledge of quantum computing and its applications in AI.',
    'Completed the Machine Learning track in the Digital Egypt Pioneers Initiative (DEPI), covering topics like Python, Supervised/Unsupervised Learning, Deep Learning, NLP, and Computer Vision. Additionally, I gained hands-on experience by completing 3 freelance gigs, which helped me build my portfolio, improve my CV, and enhance my client communication skills.',

    'This Cluster Analysis in Python certificate from DataCamp demonstrates my proficiency in unsupervised learning techniques, including K-Means, hierarchical clustering, and evaluating clustering performance. Through hands-on practice, I gained experience in data segmentation, visualization, and optimization using Scikit-learn and Matplotlib to uncover patterns and insights from complex datasets',
    'This Dimensionality Reduction in Python certificate from DataCamp showcases my expertise in reducing data complexity while preserving essential features. I gained hands-on experience with techniques like PCA, t-SNE, and ICA, using Scikit-learn to enhance model efficiency and visualization in machine learning projects.',
    'This Feature Engineering for Machine Learning in Python certificate from DataCamp highlights my expertise in transforming raw data into meaningful features. I gained hands-on experience in handling missing values, encoding categorical data, scaling features, and creating new variables using Pandas and Scikit-learn to enhance model performance.',
    'This Linear Classifiers in Python certificate from DataCamp showcases my proficiency in logistic regression and support vector machines (SVMs) for classification tasks. I gained hands-on experience with Scikit-learn to implement, evaluate, and optimize these models, improving my understanding of linear classification techniques in machine learning.',
    'This Machine Learning with Tree-Based Models in Python certificate from DataCamp highlights my expertise in decision trees, random forests, and gradient boosting algorithms. I gained hands-on experience using Scikit-learn to implement, tune, and evaluate these models for both classification and regression tasks, strengthening my skills in tree-based machine learning techniques.',
    'This Model Validation in Python certificate from DataCamp showcases my expertise in cross-validation, hyperparameter tuning, and performance evaluation. I gained hands-on experience using Scikit-learn to implement validation strategies, improve model generalization, and assess model accuracy, ensuring robust and reliable machine learning models.',
    'This Preprocessing for Machine Learning in Python certificate from DataCamp highlights my expertise in handling missing data, encoding categorical variables, scaling features, and feature selection. I gained hands-on experience using Pandas and Scikit-learn to prepare data for machine learning models, ensuring optimal model performance.',
    'This Supervised Learning with Scikit-Learn certificate from DataCamp demonstrates my expertise in regression and classification algorithms, including linear regression, decision trees, and k-nearest neighbors (k-NN). The course provided hands-on experience with Scikit-learn, enabling me to implement, train, and evaluate machine learning models for real-world datasets.',
    'This Python Programming Basics certificate from ITI Platform (Mahara-Tech) validates my fundamental knowledge of Python. The course covered variables, data types, loops, functions, and basic algorithms, strengthening my ability to write efficient and structured Python code.',
];



var certification__grid = document.getElementById("certification__grid");
certification__grid.innerHTML = '';
var i = 0;
certificate_titles.forEach(certificate => {
    certification__grid.innerHTML += `
        <div class="certification__card">
            <h4><a style="color: #FF6B35" href="https://github.com/amirahassandev/Certificates/blob/main/Machine/${certificate_links[i]}">${certificate}</a></h4>
            <p>
            ${certificate_desc[i]}
            </p>
        </div>`
        i++;
});






var projects_django = ['Doctors_hup.png', 'todoList_django.png', 'libraryManagement.png', 'EmployeeDataManagement.png'];
var altImg_django = ['Doctors_hup', 'todoList_django', 'libraryManagement', 'EmployeeDataManagement'];
var links_django = ['DoctorsHubApplication', 'todoList_django', 'libraryManagement_FunctionalParadigm', 'EmployeeDataManagement'];
var titles_django = ['Doctors_hup_Django', 'TodoList_django', 'libraryManagement_FunctionalParadigm', 'EmployeeDataManagement'];

var django__grid = document.getElementById("django__grid");
django__grid.innerHTML = '';
var i = 0;
projects_django.forEach(project => {
    django__grid.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_django[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_django[i]}</p>
                </div>
                <img src="assets/django/${project}" alt="${altImg_django[i]}">
            </div>
        </a>`;
        i++;
});


var projects_machine = ['customerChurnDetection.png', 'housePrice.png', 'Cleaning_googlePlayStore.png'];
var altImg_machine = ['Customer_Churn_Detection', 'housePrice', 'Cleaning_googlePlayStore'];
var links_machine = ['Customer_Churn_Detection', 'house_price', 'Cleaning_GooglePlayStore'];
var titles_machine = ['Customer_Churn_Detection', 'house_price', 'Cleaning_GooglePlayStore'];

var machine = document.getElementById("machine");
machine.innerHTML = '';
var i = 0;
projects_machine.forEach(project => {
    machine.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_machine[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_machine[i]}</p>
                </div>
                <img src="assets/machineLearning/${project}" alt="${altImg_machine[i]}">
            </div>
        </a>`;
        i++;
});


var projects_image = ['image_filters.png'];
var altImg_image = ['image_filters'];
var links_image = ['image_processing'];
var titles_image = ['Image Filters'];

var image_processing = document.getElementById("image_processing");
image_processing.innerHTML = '';
var i = 0;
projects_image.forEach(project => {
    image_processing.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_image[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_image[i]}</p>
                </div>
                <img src="assets/imageProcessing/${project}" alt="${altImg_image[i]}">
            </div>
        </a>`;
        i++;
});



