import {Component, OnInit} from '@angular/core';
import {VoiceRecorder} from "capacitor-voice-recorder";
import {Directory, Filesystem} from "@capacitor/filesystem";

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  recording: boolean = false
  storeFileName = []

  constructor() { }

  ngOnInit() {
    this.loadFiles()
    VoiceRecorder.requestAudioRecordingPermission()
  }

  loadFiles = () => {
    Filesystem.readdir({
      path: '',
      directory: Directory.Data
    }).then(result => {
      this.storeFileName = result.files
    })
  }

  startRecord = () => {
    if(this.recording) return
    this.recording = true;
    VoiceRecorder.startRecording();
  }

  stopRecord = () => {
    if(!this.recording) return
    VoiceRecorder.stopRecording().then(result => {
      if(result.value && result.value.recordDataBase64) {
        const recordData = result.value.recordDataBase64
        const fileName = new Date().getTime() + '.wav';
        Filesystem.writeFile({
          path: fileName,
          directory: Directory.Data,
          data: recordData
        }).then(result =>this.loadFiles() )
      }
    })
  }

  async playFile(fileName) {
    const audioFile = await Filesystem.readFile({
      path: fileName,
      directory: Directory.Data
    });
    const base64sound = audioFile.data
    const audioRef = new Audio(`data:audio/aac;base64, ${base64sound}`)
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load()
  }

  deleteFile = (fileName) => {
    Filesystem.deleteFile({
      path: fileName,
      directory: Directory.Data
    }).then(data => this.loadFiles())
  }

}
