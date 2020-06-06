
import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;


public class ProbelogrCore {

    //You can place your configuration here
    private static String ACCESS_TOKEN = "";

    //url
    private static String URL = "";

    public static void updateConfig(String url, String accessToken) {
        ProbelogrCore.URL = url;
        ProbelogrCore.ACCESS_TOKEN = accessToken;
        System.out.println("Config Updated");
    }

    private static String makeBody(String tag, String body) {
        String POST_PARAMS = "{"
                + "    \"tags\": \"" + tag + "\",\r\n"
                + "    \"body\": \"" + body + "\"\r\n"
                + "}";
        return POST_PARAMS;
    }

    private static String makeBody(String tag, Object body) {
        HashMap<String, Object> b = new HashMap();
        b.put("body", new Gson().toJson(body));
        b.put("tags", tag);
        String POST_PARAMS = new Gson().toJson(b);
        return POST_PARAMS;
    }

    public static void pushLog(String tag, String body) {
        String logBody = makeBody(tag, body);
        pushEngine(logBody);
    }

    public static void pushLog(String tag, Object body) {
        String logBody = makeBody(tag, body);
        pushEngine(logBody);
    }

    private static void pushEngine(String body) {
        try {
            URL obj = new URL(URL);
            HttpURLConnection postConnection = (HttpURLConnection) obj.openConnection();
            postConnection.setRequestMethod("POST");
            postConnection.setRequestProperty("accessToken", ProbelogrCore.ACCESS_TOKEN);
            postConnection.setRequestProperty("Content-Type", "application/json");
            postConnection.setDoOutput(true);
            OutputStream os = postConnection.getOutputStream();
            os.write(body.getBytes());
            os.flush();
            os.close();
            int responseCode = postConnection.getResponseCode();
            System.out.println("POST Response Code :  " + responseCode);
            System.out.println("POST Response Message : " + postConnection.getResponseMessage());
            if (responseCode == HttpURLConnection.HTTP_CREATED) { //success
                BufferedReader in = new BufferedReader(new InputStreamReader(
                        postConnection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();
                // print result
                System.out.println(response.toString());
            } else {
                System.out.println("POST NOT WORKED");
            }
        } catch (MalformedURLException ex) {
            Logger.getLogger(ProbelogrCore.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(ProbelogrCore.class.getName()).log(Level.SEVERE, null, ex);
        }
        System.out.println("Log pushed");
    }

}
