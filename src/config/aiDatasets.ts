
import { DatasetCategory } from '../types/datasets';

export const aiDatasets: DatasetCategory[] = [
  {
    name: "Natural Language Understanding",
    description: "Used for ChatGPT-like conversations and context understanding",
    datasets: [
      {
        feature: "Chat (GPT-like)",
        bestDataset: "OpenAssistant/oasst1",
        altDataset: "DailyDialog",
        linkBest: "https://huggingface.co/datasets/OpenAssistant/oasst1",
        linkAlt: "https://huggingface.co/datasets/daily_dialog"
      }
    ]
  },
  {
    name: "Speech Processing",
    description: "Voice input and output processing",
    datasets: [
      {
        feature: "STT (Voice Input)",
        bestDataset: "Common Voice",
        altDataset: "LibriSpeech",
        linkBest: "https://huggingface.co/datasets/mozilla-foundation/common_voice_13_0",
        linkAlt: "https://www.openslr.org/12"
      },
      {
        feature: "TTS (Voice Output)",
        bestDataset: "LJSpeech",
        altDataset: "VCTK",
        linkBest: "https://keithito.com/LJ-Speech-Dataset/",
        linkAlt: "https://datashare.ed.ac.uk/handle/10283/3443"
      }
    ]
  },
  {
    name: "Computer Vision",
    description: "Visual and emotional analysis",
    datasets: [
      {
        feature: "Emotion Detection",
        bestDataset: "RAVDESS",
        altDataset: "FER-2013",
        linkBest: "https://zenodo.org/record/1188976",
        linkAlt: "https://www.kaggle.com/datasets/msambare/fer2013"
      },
      {
        feature: "Image/Video",
        bestDataset: "COCO",
        altDataset: "Open Images V7",
        linkBest: "https://cocodataset.org/",
        linkAlt: "https://storage.googleapis.com/openimages/web/index.html"
      }
    ]
  },
  {
    name: "Language Support",
    description: "Multilingual capabilities",
    datasets: [
      {
        feature: "Multilingual",
        bestDataset: "Tatoeba",
        altDataset: "OPUS / CCMatrix",
        linkBest: "https://huggingface.co/datasets/tatoeba",
        linkAlt: "https://opus.nlpl.eu/"
      }
    ]
  }
];
