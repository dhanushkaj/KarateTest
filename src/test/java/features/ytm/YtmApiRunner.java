package features.ytm;

import com.intuit.karate.junit5.Karate;

/**
 *
 * @author pthomas3
 */
public class YtmApiRunner{
	@Karate.Test
	Karate testApi() {
		
		//return Karate.run("postapi").tags("@getUserbyParam").relativeTo(getClass());
		return Karate.run("ytmrequest").relativeTo(getClass());
		
	}
}
