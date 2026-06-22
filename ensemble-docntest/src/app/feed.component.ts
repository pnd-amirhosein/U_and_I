import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
        <span class="flex">
          <h4 class="title">time line mode:</h4>
          <eui-feed mode="timeLine" [data]="data"/>
        </span>
        <span class="flex">
        <h4 class="title">events mode:</h4>
          <eui-feed mode="events" [data]="data"/>
        </span>
        <span class="flex" style="width: 40vw;">
        <h4 class="title">Comment mode:</h4>
          <eui-feed mode="comment" [data]="data2"/>
        </span>
        <span class="flex">
        <h4 class="title">Career mode:</h4>
          <eui-feed mode="career" [data]="data2"/>
        </span>
    </div>
    `
})
export class FeedComponent {

  public data: FeedData[] = [
    {
      Title: "Oogway",
      description: "Task created by",
      icon: "plus",
      iconColor: "var(--color-success-300)"
    },
    {
      Title: "frankenstein",
      description: "State changed to in-progress by",
      icon: "clock",
      iconColor: "var(--color-primary-300)"
    },
    {
      Title: "frankenstein",
      description: "Merge request sent by",
      icon: "merge",
      iconColor: "var(--color-warning-300)"
    },
    {
      Title: "Optimus prime",
      description: "Thread started by",
      icon: "chat-bubble-oval-left",
      iconColor: "var(--color-primary-300)"
    },
    {
      Title: "Glickenstein",
      description: "Merge accepted by",
      icon: "hand-thumb-up",
      iconColor: "var(--color-success-300)"
    }
  ]
  public data2: FeedData[] = [
    {
      Title: "Oogway",
      description: "Yesterday is history, tomorrow is a mystery, but today is a gift, that's why it's called the present.",
      icon: "plus",
      iconColor: "var(--color-success-300)",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPieXZrjKPDL6bpor5rsS1JEwDouw_dsxwkQ&s",
      date: new Date("2026-04-10T04:00:00.000Z"),
      dueDate: new Date("2026-05-10T04:00:00.000Z"),
      jobType: "Fulltime",
      careerData: [
        { Title: "Software developer expert", start: new Date("2026-04-10T04:00:00.000Z"), end: new Date("2026-04-15T04:00:00.000Z") },
        { Title: "Network and security", start: new Date("2026-04-15T04:00:00.000Z"), end: new Date("2026-05-10T04:00:00.000Z") }
      ]
    },
    {
      Title: "frankenstein",
      description: "There is something at work in my soul, which I do not understand.",
      icon: "clock",
      iconColor: "var(--color-primary-300)",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuz9uW4lWX3PFQCYcFLVRBwYkWIo0UhKm-VQ&s",
      date: new Date("2026-04-10T04:00:00.000Z"),
      dueDate: new Date("2026-05-10T04:00:00.000Z"),
      jobType: "Fulltime",
      careerData: [
        { Title: "Software developer expert", start: new Date("2026-04-10T04:00:00.000Z"), end: new Date("2026-04-15T04:00:00.000Z") },
        { Title: "Network and security", start: new Date("2026-04-15T04:00:00.000Z"), end: new Date("2026-05-10T04:00:00.000Z") }
      ]
    },
    {
      Title: "Optimus prime",
      description: "Do not lament my absence, for in my spark, I know that this is not the end, but merely a new beginning. Simply put, another transformation.",
      icon: "chat-bubble-oval-left",
      iconColor: "var(--color-primary-300)",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Y4dHZlwU89cTkH6dd42JKz87OJ7AFkgqeg&s",
      date: new Date("2026-04-10T04:00:00.000Z"),
      dueDate: new Date("2026-05-10T04:00:00.000Z"),
      jobType: "Fulltime",
      careerData: [
        { Title: "Software developer expert", start: new Date("2026-04-10T04:00:00.000Z"), end: new Date("2026-04-15T04:00:00.000Z") },
        { Title: "Network and security", start: new Date("2026-04-15T04:00:00.000Z"), end: new Date("2026-05-10T04:00:00.000Z") }
      ]
    },
    {
      Title: "Glickenstein",
      description: "Now to take the old cow for a test drive!",
      icon: "hand-thumb-up",
      iconColor: "var(--color-success-300)",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUX0NUi-iOY0nVbn4qof6K3OdXgwKhGPO4CA&s",
      date: new Date("2026-04-10T04:00:00.000Z"),
      dueDate: new Date("2026-05-10T04:00:00.000Z"),
      jobType: "Fulltime",
      careerData: [
        { Title: "Software developer expert", start: new Date("2026-04-10T04:00:00.000Z"), end: new Date("2026-04-15T04:00:00.000Z") },
        { Title: "Network and security", start: new Date("2026-04-15T04:00:00.000Z"), end: new Date("2026-05-10T04:00:00.000Z") }
      ]
    }
  ]
}


export interface FeedData {
  Title: string,
  description: string
  icon?: string,
  iconColor?: string,
  avatar?: string
  date?: Date | string
  dueDate?: Date | string
  jobType?: string
  careerData?: CareerData[]
}

export interface CareerData {
  Title: string,
  start: Date | string,
  end: Date | string
}