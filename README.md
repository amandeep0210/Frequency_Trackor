# Frequency_Trackor
The Hosted link is attached below:
[teriiblyamandeep.netlify.app](teriiblyamandeep.netlify.app)

#  TERRIBLY TINY TALES Assignment

# Introduction:

The project is a frontend web application developed using React.js that fetches and analyzes text data from a given URL, generates a histogram of the top 20 most occurring words, and allows users to export the data as a CSV file. The application has a simple user interface, consisting of only one button that initiates the data fetching and processing. Once the analysis is complete, the application displays a histogram of the top 20 most frequently occurring words, with the ability to download the histogram data as a CSV file using the export button. This application can be useful for analyzing text data and generating quick visualizations of the most common words in the text.

In which I used the following steps:
 1. On first load, only has a Submit button
2. On clicking on Submit, it will fetch the contents of https://www.terriblytinytales.com/test.txt
3. Parse the content and find the frequency of occurrence of each word.
4. Then on the frontend, plot a histogram of the 20 most occurring words.
5. Also build an "Export" button, which when clicked will download a CSV file of the histogram data.

# Components used


# Button Component
This is a React functional component that renders a button which, when clicked, fetches the contents of the URL "https://www.terriblytinytales.com/test.txt". The component then processes the text data, generates a frequency map of words, sorts them in descending order, and finally renders a histogram displaying the 20 most frequent words in the fetched content.

# How to Use
To use this component, you need to import it into your React project and then simply use it as a component in your code. The component will render a button, and when clicked, it will fetch data from the URL and render the histogram component.

# Dependencies
This component uses the following dependencies:

1. React
2. Histogram component
3. CSS file

# How it Works
The Button component works in the following way:

* When the button is clicked, it triggers the fetchData function.
* The fetchData function makes an API call to "https://www.terriblytinytales.com/test.txt" to fetch the text data.
* The fetched data is then processed to generate a frequency map of words.
* The frequency map is sorted in descending order to get the most frequent words.
* The top 20 most frequent words are then passed as props to the Histogram component, which renders a histogram of these words.

# Component Structure
The Button component consists of the following parts:

* State: The component has a state variable called data that stores the top 20 most frequent words.
* Functions: The component has a function called fetchData that fetches the text data, processes it, and sets the data state variable.
* Rendering: The component renders a button, a header, and the Histogram component, which is only displayed when there is data in the data state variable.


# ExportButton Component
This is a React component that displays a button for exporting data to a CSV file. It takes in an array of objects and converts it to a CSV file for download using the CSVLink component from the react-csv library.

# Installation
To use this component in your React project, you can install the react-csv library using npm or yarn:





# Code:

```bash
 npm install react-csv

```
 # Usage
To use the ExportButton component, import it into your React component and pass in the data as a prop. The data should be an array of objects.

# Props
The ExportButton component accepts the following props:

* data: An array of objects to be exported as a CSV file.
# Styling
The ExportButton component comes with some basic styling. You can customize the styling by modifying the CSS classes defined in the ExportButton.css file.

# Dependencies
This component has the following dependencies:

* react-csv
Make sure this is installed in your project before using this component.

# Histogram Component
This is a React component that displays a histogram of the top 20 most frequently occurring words in a given text. It uses the react-chartjs-2 library to display the chart.

# Installation
To use this component in your React project, you can install it using npm or yarn:
# Code:

```
npm install react-chartjs-2 chart.js

```
# Usage
To use the `Histogram` component, import it into your React component and pass in the data as a prop. The data should be an array of objects, each object containing a word and its corresponding `frequency`.

# Props
The Histogram component accepts the following props:

* data: An array of objects containing the word and its corresponding frequency.
# Styling
The Histogram component comes with some basic styling. You can customize the styling by modifying the CSS classes defined in the Histogram.css file.

# Exporting Data
The Histogram component includes an ExportButton component that allows users to download the data as a CSV file. The ExportButton component takes the data prop as its input.

# Dependencies
This component has the following dependencies:

* react
* react-chartjs-2
* chart.js


# Output Screen:
** ON LOAD: **
![Screenshot (126)](https://github.com/amandeep0210/Frequency_Trackor/assets/76957483/10ced90a-53a5-4616-a7d8-7b5563b1832b)

** ON CLICK: **
![Screenshot (127)](https://github.com/amandeep0210/Frequency_Trackor/assets/76957483/6148c134-e4b8-4076-8162-92f469cd82c8)

** ON EXPORT: **
![Screenshot (128)](https://github.com/amandeep0210/Frequency_Trackor/assets/76957483/3c7352a5-2958-486c-9b01-21da09b5a68c)




