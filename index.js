const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    try {
      const ms = core.getInput('milliseconds')
  
      // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
      core.debug(`Waiting ${ms} milliseconds ...`)
  
      // Log the current timestamp, wait, then log the new timestamp
      core.debug(new Date().toTimeString())
      await wait(parseInt(ms, 10))
      core.debug(new Date().toTimeString())
  
      // Set outputs for other workflow steps to use
      core.setOutput('time', new Date().toTimeString())
    } catch (error) {
      // Fail the workflow run if an error occurs
      if (error instanceof Error) core.setFailed(error.message)
    }
  }