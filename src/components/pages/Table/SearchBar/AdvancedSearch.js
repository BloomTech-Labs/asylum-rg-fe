import React from 'react';
import { connect } from 'react-redux';
import { Form, Checkbox, Button, DatePicker } from 'antd';
import { advancedSearch } from '../../../../state/actions/index';

function AdvancedSearch(props) {
  const { asylum, advancedSearch } = props;
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;

  const asylumOfficeOptions = [];
  const citizenshipOptions = [];
  const raceOrEthnicityOptions = [];
  const caseOutcomeOptions = [];

  asylum.forEach(entry => {
    if (!asylumOfficeOptions.includes(entry.asylumOffice)) {
      asylumOfficeOptions.push(entry.asylumOffice);
    }

    if (!citizenshipOptions.includes(entry.citizenship)) {
      citizenshipOptions.push(entry.citizenship);
    }

    if (!raceOrEthnicityOptions.includes(entry.raceOrEthnicity)) {
      raceOrEthnicityOptions.push(entry.raceOrEthnicity);
    }

    if (!caseOutcomeOptions.includes(entry.caseOutcome)) {
      caseOutcomeOptions.push(entry.caseOutcome);
    }
  });

  function onFinish(values) {
    const {
      asylumOffice,
      citizenship,
      raceOrEthnicity,
      caseOutcome,
      completionDate,
    } = values;

    const parameters = {
      data: asylum,
      asylumOffice: null,
      citizenship: null,
      raceOrEthnicity: null,
      caseOutcome: null,
      completion: null,
    };

    if (asylumOffice !== undefined) parameters.asylumOffice = asylumOffice;
    if (citizenship !== undefined) parameters.citizenship = citizenship;
    if (raceOrEthnicity !== undefined)
      parameters.raceOrEthnicity = raceOrEthnicity;
    if (caseOutcome !== undefined) parameters.caseOutcome = caseOutcome;
    if (completionDate !== undefined) {
      parameters.completion = [
        completionDate[0].format('YYYY-MM-DD'),
        completionDate[1].format('YYYY-MM-DD'),
      ];
    }

    advancedSearch(parameters);
  }

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label="Asylum Office" name="asylumOffice">
        <Checkbox.Group options={asylumOfficeOptions} />
      </Form.Item>

      <Form.Item label="Citizenship" name="citizenship">
        <Checkbox.Group options={citizenshipOptions} />
      </Form.Item>

      <Form.Item label="Race/Ethnicity" name="raceOrEthnicity">
        <Checkbox.Group options={raceOrEthnicityOptions} />
      </Form.Item>

      <Form.Item label="Case Outcome" name="caseOutcome">
        <Checkbox.Group options={caseOutcomeOptions} />
      </Form.Item>

      <Form.Item label="Completion Date" name="completionDate">
        <RangePicker />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Get Advanced Results🔎
        </Button>
      </Form.Item>
    </Form>
  );
}

const mapStateToProps = state => {
  return {
    asylum: state.dataReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    advancedSearch: parameters => {
      dispatch(advancedSearch(parameters));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);
