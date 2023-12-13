// file
import certJson from "@/cert.json"
// utils
import { credential } from "firebase-admin"
import { ServiceAccount, getApp, getApps, initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

const app = !getApps().length
	? initializeApp({ credential: credential.cert(certJson as ServiceAccount) })
	: getApp()

const adminFirestore = getFirestore(app)
adminFirestore.settings({ ignoreUndefinedProperties: true })

export default app
export { adminFirestore }
