const tf = require("@tensorflow/tfjs-node");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/../../.env` });

async function loadModel() {
	return tf.loadGraphModel("https://storage.googleapis.com/mlcloud-bucket/model.json");
}

module.exports = loadModel;
