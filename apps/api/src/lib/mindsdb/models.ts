import MindsDB from 'mindsdb-js-sdk';

// Defining training options
const trainingOptions = {
    using: {engine: 'openai', prompt_template: 'describe the sentiment of the reviews strictly as "positive", "neutral", or "negative". "I love the product":positive "It is a scam":negative "{{review}}.":'}
  };
  
  try {
  
    // Creating and training a model
    let openai_js = await MindsDB.Models.trainModel(
      'openai_js',
      'sentiment',
      'mindsdb',
      trainingOptions);
    
    console.log('created a model');
  
    // Waiting for the training to be complete
    while (openai_js.status !== 'complete' && openai_js.status !== 'error') {
      openai_js = await MindsDB.Models.getModel('openai_js', 'mindsdb');
    }
    
    // Checking model's status
    console.log('Model status: ' + openai_js.status);
  
    // Defining query options
    const queryOptions = {
      where: [
        'review = \'It is ok.\''
      ]
    }
  
    // Querying for a single prediction
    openai_js = await openai_js.query(queryOptions);
    console.log('Predicted value:');
    console.log(openai_js.value);
    console.log('Prediction insights:');
    console.log(openai_js.explain);
    console.log('Input data:');
    console.log(openai_js.data);
  
  } catch (error) {
    // Something went wrong training or querying
    console.log(error);
  }
  