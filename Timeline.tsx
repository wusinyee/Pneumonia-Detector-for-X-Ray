import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, FileText, Brain, Zap, Clock, Heart, Shield, BarChart3,
  Activity, GitBranch, Award, ChevronDown, Upload, FileCheck
} from 'lucide-react';

const PhaseCard = ({ phase, isExpanded, onToggle }) => {
  return (
    <motion.div 
      className="w-full bg-white rounded-lg shadow-sm overflow-hidden mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div 
        className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors
          ${isExpanded ? 'bg-blue-50/30' : ''}`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <phase.icon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{phase.name}</h3>
              <p className="text-sm text-gray-500">{phase.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-sm
              ${phase.status === 'Completed' ? 'bg-green-100 text-green-700' :
                phase.status === 'In Progress' ? 'bg-amber-100 text-amber-600' :
                  'bg-gray-100 text-gray-600'}`}>
              {phase.status}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200
                ${isExpanded ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      </div>

      {isExpanded && (
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="border-t border-gray-100"
        >
          <div className="p-4 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-gray-400" />
                <h4 className="font-medium text-gray-900">Key Tasks</h4>
              </div>
              <ul className="space-y-3">
                {phase.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-4 h-4 text-gray-400" />
                <h4 className="font-medium text-gray-900">Deliverables</h4>
              </div>
              <ul className="space-y-3">
                {phase.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {phase.metrics && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-gray-400" />
                  <h4 className="font-medium text-gray-900">Success Metrics</h4>
                </div>
                <div className="bg-blue-50/50 rounded-lg p-4">
                  <ul className="space-y-3">
                    {phase.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function Timeline() {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const phases = [
    {
      name: 'Data Collection and Exploration',
      duration: 'Weeks 1-4',
      status: 'Completed',
      icon: Search,
      tasks: [
        'Dataset integration (NIH ChestX-ray14, CheXpert)',
        'Initial data quality assessment',
        'Population demographics analysis'
      ],
      deliverables: [
        'Compiled dataset',
        'EDA report',
        'Data quality assessment report'
      ],
      metrics: [
        'Dataset size > 300,000 images',
        'Balanced demographic distribution',
        'Complete metadata availability'
      ]
    },
    {
      name: 'Data Preprocessing',
      duration: 'Weeks 5-8',
      status: 'In Progress',
      icon: FileText,
      tasks: [
        'Quality control protocol implementation',
        'Image standardization pipeline',
        'Data augmentation setup'
      ],
      deliverables: [
        'Preprocessing pipeline',
        'Quality control documentation',
        'Augmentation strategy'
      ],
      metrics: [
        'Quality Score > 0.95/1.0',
        'SNR > 15dB',
        'Artifact rate < 2%'
      ]
    },
    {
      name: 'Model Selection and Development',
      duration: 'Weeks 9-12',
      status: 'Planned',
      icon: Brain,
      tasks: [
        'Architecture evaluation',
        'Model implementation',
        'Initial testing setup'
      ],
      deliverables: [
        'Model architecture document',
        'Implementation codebase',
        'Testing framework'
      ],
      metrics: [
        'Model complexity assessment',
        'Initial accuracy > 85%',
        'Training time < 24h'
      ]
    },
    {
      name: 'Model Training & Validation',
      duration: 'Weeks 13-16',
      status: 'Planned',
      icon: Zap,
      tasks: [
        'Training pipeline setup',
        'Cross-validation implementation',
        'Performance optimization'
      ],
      deliverables: [
        'Trained model checkpoints',
        'Validation reports',
        'Performance analysis'
      ],
      metrics: [
        'Accuracy > 90%',
        'Sensitivity > 85%',
        'Specificity > 85%'
      ]
    },
    {
      name: 'Uncertainty Quantification',
      duration: 'Weeks 17-20',
      status: 'Planned',
      icon: Clock,
      tasks: [
        'Uncertainty estimation implementation',
        'Confidence scoring setup',
        'Edge case analysis'
      ],
      deliverables: [
        'Uncertainty metrics report',
        'Confidence threshold document',
        'Edge case documentation'
      ],
      metrics: [
        'Calibration error < 0.1',
        'Confidence correlation > 0.8',
        'Edge case detection rate > 90%'
      ]
    },
    {
      name: 'Clinical Integration',
      duration: 'Weeks 21-24',
      status: 'Planned',
      icon: Heart,
      tasks: [
        'Clinical workflow integration',
        'Interface development',
        'User acceptance testing'
      ],
      deliverables: [
        'Integration documentation',
        'User interface',
        'Testing results'
      ],
      metrics: [
        'System response time < 2s',
        'User satisfaction > 4/5',
        'Workflow efficiency improvement > 20%'
      ]
    },
    {
      name: 'Safety and Compliance',
      duration: 'Weeks 25-28',
      status: 'Planned',
      icon: Shield,
      tasks: [
        'Safety assessment',
        'Regulatory compliance check',
        'Documentation review'
      ],
      deliverables: [
        'Safety report',
        'Compliance documentation',
        'Risk assessment'
      ],
      metrics: [
        'Safety requirements met 100%',
        'Compliance score > 95%',
        'Risk mitigation completion'
      ]
    },
    {
      name: 'Evaluation and Results',
      duration: 'Weeks 29-32',
      status: 'Planned',
      icon: BarChart3,
      tasks: [
        'Final performance evaluation',
        'Clinical validation',
        'Results analysis'
      ],
      deliverables: [
        'Evaluation report',
        'Clinical validation results',
        'Performance metrics'
      ],
      metrics: [
        'Clinical accuracy > 92%',
        'False positive rate < 5%',
        'Clinical validation success'
      ]
    },
    {
      name: 'Documentation and Handover',
      duration: 'Weeks 33-36',
      status: 'Planned',
      icon: FileCheck,
      tasks: [
        'Technical documentation',
        'User manual creation',
        'Knowledge transfer'
      ],
      deliverables: [
        'Complete documentation package',
        'User manuals',
        'Training materials'
      ],
      metrics: [
        'Documentation completeness',
        'Knowledge transfer completion',
        'Stakeholder sign-off'
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Pneumonia Detector: Deep Learning Project Timeline</h1>
        <p className="text-gray-600 mt-2">Advanced Pneumonia Detection System Development and Deployment Timeline</p>
      </div>
      
      <div className="space-y-1">
        {phases.map((phase, index) => (
          <PhaseCard
            key={index}
            phase={phase}
            isExpanded={expandedPhase === index}
            onToggle={() => setExpandedPhase(expandedPhase === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}
