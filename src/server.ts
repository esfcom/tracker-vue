import { Server } from "miragejs"
import class2023 from "./data/class2023.json"
import class2024 from "./data/class2024.json"
import class2025 from "./data/class2025.json"
import class2026 from "./data/class2026.json"
import history from "./data/history.json"
import campusOverview from './data/campusOverview.json'
import studentNames from './data/studentNames.json'

export function makeServer({ environment = "development" } = {}) {
    const server = new Server({
        environment,
        fixtures: {
            class2023,
            class2024,
            class2025,
            class2026,
            history,
            campusOverview,
            studentNames
        },
        seeds(server) {
            server.loadFixtures()
        },
        routes() {
            this.namespace = "api"
            this.get("2023", () => {
                return class2023
            })
            this.get("2024", () => {
                return class2024
            })
            this.get("2025", () => {
                return class2025
            })
            this.get("2026", () => {
                return class2026
            })
            this.get("history", () => {
                return history
            })
            this.get("campusOverview", () => {
                return campusOverview
            })
            this.get("studentNames", () => {
                return studentNames
            })
        },
    })
    return server
}